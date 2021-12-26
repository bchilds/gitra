import React, { useState, useCallback } from 'react';
import Button from '../../components/basic/button';
import ContentBlock from '../../components/content-block';
import { getRandomInt } from '../../helpers/math';
import { newGuid } from '../../helpers/guid';

const UNCATEGORIZED = 'uncategorized';
const uncategorizedStatus ={
  id: UNCATEGORIZED,
  name: 'Uncategorized',
};

const MainPage = () => {
  const [items, setItems] = useState([]);
  // const [newItemName, setNewItemName] = useState('');
  const [sections, setSections] = useState([uncategorizedStatus]);
  // const [newSectionName, setNewSectionName] = useState('');

  // useEffect: load items and sections

  const onAddItem = useCallback(() => {
    const title = `Item - ${getRandomInt(100, 1000)}`;
    const description = `Description - ${getRandomInt(100, 1000)}`;
    const myStatus = UNCATEGORIZED;
    const githubStatus = 'open';
    const id = newGuid();
    const item = { id, title, description, myStatus, githubStatus };
    setItems([...items, item]);
  }, [items, setItems]);

  const onAddSection = useCallback(() => {
    const id = newGuid();
    const name = `Section - ${getRandomInt(100, 1000)}`;
    const section = { id, name };
    setSections([...sections, section]);
  }, [sections, setSections]);

  return (
    <div className='page'>
      <div className='main-header'>
        <Button onClick={onAddItem}>Add Item</Button>
        <Button onClick={onAddSection}>Add Section</Button>
      </div>
      {items.map(({ id, title, description, githubStatus, myStatus }, index) => (
        <ContentBlock
          key={id}
          id={id}
          index={index}
          title={title}
          description={description}
          githubStatus={githubStatus}
          myStatus={myStatus}
        />
      ))}
    </div>
  );
};

export default MainPage;
