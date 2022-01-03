import React from 'react';
import Button from '../button';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, hideModal, title, children }) => {
  return isOpen
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
              </div>
              <div className='modal-content'>{children}</div>
              <div className='modal-footer'>
                <Button className='modal-close' onClick={hideModal}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};
export default Modal;
