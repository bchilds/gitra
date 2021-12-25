import React, { useState, useCallback } from 'react';
import Button from '../../components/basic/button';
import ContentBlock from '../../components/content-block';
import { getRandomInt } from '../../helpers/math';

const MainPage = () => {
  const [items, setItems] = useState([]);
  // const [newItemName, setNewItemName] = useState('');
  const [sections, setSections] = useState([]);
  // const [newSectionName, setNewSectionName] = useState('');

  const onAddItem = useCallback(() => {
    const title = `Item - ${getRandomInt(100, 1000)}`;
    const description = `Description - ${getRandomInt(100, 1000)}`;
    const myStatus = 'wip';
    const githubStatus = 'open';
    const item = { title, description, myStatus, githubStatus };
    setItems([...items, item]);
  }, [items, setItems]);

  const onAddSection = useCallback(() => {
    const name = `Section - ${getRandomInt(100, 1000)}`;
    setSections([...sections, { name }]);
  }, [sections, setSections]);

  return (
    <div className='page'>
      <div className='main-header'>
        <Button onClick={onAddItem}>Add Item</Button>
        <Button onClick={onAddSection}>Add Section</Button>
      </div>
      {items.map(({ title, description, githubStatus, myStatus }) => (
        <ContentBlock
          key={title}
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
