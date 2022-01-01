import React from 'react';
import PropTypes from 'proptypes';
import { Draggable } from 'react-beautiful-dnd';
import ContentItem from './index';
import { proptypes } from '../../prop-types/content-item.proptypes';

const DraggableContentItem = ({
  id,
  index,
  title,
  description,
  githubStatus,
  sectionId,
}) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided, snapshot) => (
        /*
          snapshot.isDragging,
          provided.draggableProps.style
        */
        <ContentItem
          title={title}
          description={description}
          githubStatus={githubStatus}
          sectionId={sectionId}
          provided={provided}
        />
      )}
    </Draggable>
  );
};

DraggableContentItem.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  ...proptypes,
};

export default DraggableContentItem;
