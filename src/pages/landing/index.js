import React, { useState, useCallback } from 'react';
import Button from '../../components/basic/button';
import DraggableContentItem from '../../components/content-item/draggable';
import DndContext from '../../components/react-dnd/context';
import DroppableSection from '../../components/content-section/droppable';
import { getRandomInt } from '../../helpers/math';
import { newGuid } from '../../helpers/guid';
import { reorder } from '../../helpers/reorder';

// constants
const UNCATEGORIZED = 'uncategorized';
const uncategorizedStatus = {
  id: UNCATEGORIZED,
  name: 'Uncategorized',
};
// end constants

const LandingPage = () => {
  const [items, setItems] = useState({});
  // const [newItemName, setNewItemName] = useState('');
  const [sections, setSections] = useState({
    [UNCATEGORIZED]: uncategorizedStatus,
  });
  const [sectionOrder, setSectionOrder] = useState(Object.keys(sections));
  // const [newSectionName, setNewSectionName] = useState('');

  // useEffect: load items and sections

  const onAddItem = useCallback(() => {
    const title = `Item - ${getRandomInt(100, 1000)}`;
    const description = `Description - ${getRandomInt(100, 1000)}`;
    const sectionId = UNCATEGORIZED;
    const githubStatus = 'open'; // temporary
    const id = newGuid();
    const item = {
      id,
      title,
      description,
      sectionId,
      githubStatus,
    };
    const existingUncategorizedItems = items[UNCATEGORIZED] ?? [];
    setItems({
      ...items,
      [UNCATEGORIZED]: [item, ...existingUncategorizedItems],
    });
  }, [items, setItems]);

  const onAddSection = useCallback(() => {
    const id = newGuid();
    const name = `Section - ${getRandomInt(100, 1000)}`;
    const section = { id, name };
    setSections({ ...sections, [id]: section });
    setSectionOrder([...sectionOrder, id]);
  }, [sections, setSections, sectionOrder, setSectionOrder]);

  const onDragEnd = useCallback(
    ({ source, destination }) => {
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

      const noDestination = !destination;
      const isSameList = source.droppableId === destination.droppableId;
      const isSameIndex = source.index === destination.index;
      const isSameSpot = isSameList && isSameIndex;

      if (noDestination || isSameSpot) {
        return;
      }

      if (!isSameList) {
        // implement different-list logic
        return;
      }

      // same list
      const newItems = reorder(
        items[destination.droppableId],
        source.index,
        destination.index
      );

      setItems({ ...items, [destination.droppableId]: newItems });
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
        {sectionOrder.map((sectionId) => (
          <DroppableSection key={sectionId} section={sections[sectionId]}>
            {items[sectionId]?.map(
              ({ id, title, description, githubStatus }, index) => (
                <DraggableContentItem
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

export default LandingPage;
