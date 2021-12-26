import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

const Context = ({ children, onDragEnd }) => (
  <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>
);

Context.propTypes = {
  onDragEnd: PropTypes.func.isRequired,
  children: PropTypes.PropTypes.arrayOf(PropTypes.node),
};

Context.defaultProps = {
  children: [],
};

export default Context;
