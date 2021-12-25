import React, { useState, useCallback } from 'react';
import Button from '../../components/basic/button';
import { getRandomInt } from '../../helpers/math';

const MainPage = () => {
  const [items, setItems] = useState([]);
  // const [newItemName, setNewItemName] = useState('');
  const [sections, setSections] = useState([]);
  // const [newSectionName, setNewSectionName] = useState('');

  const onAddItem = useCallback(() => {
    const name = `Item - ${getRandomInt(100, 1000)}`;
    setItems([...items, { name }]);
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
      <ul>
        {items.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
