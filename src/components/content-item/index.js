import React from 'react';

const ContentItem = ({
  title,
  description,
  githubStatus,
  sectionId,
  provided,
}) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className='content-item'
    >
      <h5 className='content-title'>{title}</h5>
      <p className='content-description'>{description}</p>
      <p className='content-my-status'>{sectionId}</p>
      <p className='content-gh-status'>{githubStatus}</p>
    </div>
  );
};

export default ContentItem;
