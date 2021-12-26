import React, { useState, useCallback } from 'react';
import Button from '../../components/basic/button';
import DraggableContentBlock from '../../components/content-block/draggable';
import DndContext from '../../components/react-dnd/context';
import DroppableSection from '../../components/content-section/droppable';
import { getRandomInt } from '../../helpers/math';
import { newGuid } from '../../helpers/guid';

// constants
const UNCATEGORIZED = 'uncategorized';
const uncategorizedStatus = {
  id: UNCATEGORIZED,
  name: 'Uncategorized',
};
// end constants

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  if (endIndex) {
    result.splice(endIndex, 0, removed);
  }

  return result;
};

const MainPage = () => {
  const [items, setItems] = useState([]);
  // const [newItemName, setNewItemName] = useState('');
  const [sections, setSections] = useState([uncategorizedStatus]);
  const [sectionOrder, setSectionOrder] = useState(
    sections.map(({ id }) => id)
  );
  // const [newSectionName, setNewSectionName] = useState('');

  // useEffect: load items and sections

  const onAddItem = useCallback(() => {
    const title = `Item - ${getRandomInt(100, 1000)}`;
    const description = `Description - ${getRandomInt(100, 1000)}`;
    const sectionId = UNCATEGORIZED;
    const githubStatus = 'open'; // temporary
    const id = newGuid();
    // this section _should_ always exist
    const item = {
      id,
      title,
      description,
      sectionId,
      githubStatus,
    };
    setItems([...items, item]);
  }, [items, setItems]);

  const onAddSection = useCallback(() => {
    const id = newGuid();
    const name = `Section - ${getRandomInt(100, 1000)}`;
    const section = { id, name };
    setSections([...sections, section]);
  }, [sections, setSections]);

  const onDragEnd = useCallback(
    (result) => {
      // this needs some more logic for multilist, need to look at example for ez implementation

      /*
        draggableId: "item-0"
        type: "DEFAULT"
        source: Object
          index: 0
          droppableId: "droppable"
        mode: "FLUID"
        destination: Object
          droppableId: "droppable"
          index: 1
        combine: null
        reason: "DROP"
      */
      // dropped outside the list
      if (!result.destination) {
        return;
      }

      const newItems = reorder(
        items,
        result.source.index,
        result.destination.index
      );

      setItems(newItems);
    },
    [items, setItems]
  );

  return (
    <div className='page'>
      <div className='main-header'>
        <Button onClick={onAddItem}>Add Item</Button>
        <Button onClick={onAddSection}>Add Section</Button>
      </div>
      <DndContext onDragEnd={onDragEnd}>
        {sections.map((section) => (
          <DroppableSection key={section.id} section={section}>
            {items.map(
              ({ id, title, description, githubStatus, sectionId }, index) => (
                <DraggableContentBlock
                  key={id}
                  id={id}
                  index={index}
                  title={title}
                  description={description}
                  githubStatus={githubStatus}
                  sectionId={sectionId}
                />
              )
            )}
          </DroppableSection>
        ))}
      </DndContext>
    </div>
  );
};

export default MainPage;
