import React from 'react';
import PropTypes from 'proptypes';
import { Draggable } from 'react-beautiful-dnd';
import ContentBlock from './index';
import { proptypes } from '../../prop-types/content-block.proptypes';

const DraggableContentBlock = ({
  id,
  index,
  title,
  description,
  githubStatus,
  myStatus,
}) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided, snapshot) => (
        /*
          snapshot.isDragging,
          provided.draggableProps.style
        */
        <ContentBlock
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          title={title}
          description={description}
          githubStatus={githubStatus}
          myStatus={myStatus}
        />
      )}
    </Draggable>
  );
};

DraggableContentBlock.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  ...proptypes,
};

export default DraggableContentBlock;
