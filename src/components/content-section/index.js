import React from 'react';

const ContentSection = (props) => {
  const { innerRef, droppableProps } = props;
  return (
    <div className='content-section' ref={innerRef} {...droppableProps}>
      {props.children}
    </div>
  );
};

export default ContentSection;
