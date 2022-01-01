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
  itemIds: [],
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

  const replaceItemsForSection = useCallback(
    ({ newItems, sectionId }) => {
      setSections({
        ...sections,
        [sectionId]: { ...sections[sectionId], itemIds: newItems },
      });
    },
    [sections, setSections]
  );

  const addItemToSection = useCallback(
    ({ item, sectionId, prepend = false }) => {
      const { itemIds = [] } = sections[sectionId];
      const newItems = prepend ? [item.id, ...itemIds] : [...itemIds, item.id];
      replaceItemsForSection({ newItems, sectionId });
    },
    [sections, replaceItemsForSection]
  );

  const onAddNewItem = useCallback(() => {
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
    setItems({ [id]: item, ...items });
    addItemToSection({ item, sectionId: UNCATEGORIZED, prepend: true });
  }, [items, setItems, addItemToSection]);

  const onAddSection = useCallback(() => {
    const id = newGuid();
    const name = `Section - ${getRandomInt(100, 1000)}`;
    const itemIds = [];
    const section = { id, name, itemIds };
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
        sections[destination.droppableId].itemIds,
        source.index,
        destination.index
      );
      replaceItemsForSection({ newItems, sectionId: destination.droppableId });
    },
    [sections, replaceItemsForSection]
  );

  return (
    <div className='page'>
      <div className='main-header'>
        <Button onClick={onAddNewItem}>Add Item</Button>
        <Button onClick={onAddSection}>Add Section</Button>
      </div>
      <DndContext onDragEnd={onDragEnd}>
        {sectionOrder.map((sectionId) => (
          <DroppableSection key={sectionId} section={sections[sectionId]}>
            {sections[sectionId].itemIds?.map((itemId, index) => {
              const { id, title, description, githubStatus } = items[itemId];
              return (
                <DraggableContentItem
                  key={id}
                  id={id}
                  index={index}
                  title={title}
                  description={description}
                  githubStatus={githubStatus}
                  sectionId={sectionId}
                />
              );
            })}
          </DroppableSection>
        ))}
      </DndContext>
    </div>
  );
};

export default LandingPage;
