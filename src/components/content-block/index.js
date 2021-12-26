import React from 'react';

const ContentBlock = ({
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
      className='content-block'
    >
      <h5 className='content-title'>{title}</h5>
      <p className='content-description'>{description}</p>
      <p className='content-my-status'>{sectionId}</p>
      <p className='content-gh-status'>{githubStatus}</p>
    </div>
  );
};

export default ContentBlock;
