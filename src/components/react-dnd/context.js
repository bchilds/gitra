import React from 'react';
import PropTypes from 'proptypes';
import { DragDropContext } from 'react-beautiful-dnd';

const Context = ({ children, onDragEnd }) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <div className='dnd-context-container'>{children}</div>
  </DragDropContext>
);

Context.propTypes = {
  onDragEnd: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
};

Context.defaultProps = {
  children: [],
};

export default Context;
