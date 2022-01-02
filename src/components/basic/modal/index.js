import React from 'react';
import Button from '../button';
import { createPortal } from 'react-dom';

const Modal = ({ isVisible, hideModal, title, children }) => {
  return isVisible
    ? createPortal(
        <React.Fragment>
          <div className='modal-overlay' />
          <div
            className='modal-wrapper'
            aria-modal={true}
            aria-hidden={true}
            tabIndex={-1}
            role='dialog'
          >
            <div className='modal-body'>
              <div className='modal-header'>
                <h5 className='modal-title'>{title}</h5>
                {children}
              </div>
              <Button className='modal-close' onClick={hideModal}>
                Close
              </Button>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};
export default Modal;
