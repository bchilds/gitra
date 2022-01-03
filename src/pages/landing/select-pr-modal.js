import React, { useCallback } from 'react';
import Modal from '../../components/basic/modal';

const SelectPrModal = ({ isOpen, toggleModal }) => {
  const hideModal = useCallback(() => {
    if (isOpen) {
      toggleModal();
    }
  }, [isOpen, toggleModal]);
  return (
    <Modal isOpen={isOpen} hideModal={hideModal} title='GitHub PRs'>
      Modal content here
    </Modal>
  );
};

export default SelectPrModal;
