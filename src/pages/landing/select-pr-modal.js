import React, { useCallback, useState } from 'react';
import { useAsyncSafeState } from '../../hooks/async-safe';
import Input from '../../components/basic/input';
import Modal from '../../components/basic/modal';
import PrTableHeader from '../../components/pr-table/pr-table-header';
import PrTableBody from '../../components/pr-table/pr-table-body';
import { emptyArray } from '../../prop-types/empty';

const SelectPrModal = ({ isOpen, toggleModal, onAddNewItem }) => {
  const foundPrs = useAsyncSafeState(emptyArray);
  const [newItemName, setNewItemName] = useState('');
  const onNewItemNameChange = useCallback(
    (e) => {
      const newValue = e?.target?.value ?? '';
      setNewItemName(newValue);
    },
    [setNewItemName]
  );

  const _onAddNewItem = useCallback(
    ({ prNumber }) => {
      onAddNewItem({ newItemName, prNumber });
      // if successful
      setNewItemName('');
    },
    [newItemName, setNewItemName]
  );

  const hideModal = useCallback(() => {
    if (isOpen) {
      toggleModal();
    }
  }, [isOpen, toggleModal]);
  return (
    <Modal isOpen={isOpen} hideModal={hideModal} title='GitHub PRs'>
      <Input
        value={newItemName}
        onChange={onNewItemNameChange}
        placeholder='New Item Name...'
      />
      <PrTableHeader performSearch={() => {}} />
    </Modal>
  );
};

export default SelectPrModal;
