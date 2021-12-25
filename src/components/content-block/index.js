import React from 'react';

const ContentBlock = ({ title, description, githubStatus, myStatus }) => {
  return (
    <div className='content-block'>
      <h5 className='content-title'>{title}</h5>
      <p className='content-description'>{description}</p>
      <p className='content-my-status'>{myStatus}</p>
      <p className='content-gh-status'>{githubStatus}</p>
    </div>
  );
};

export default ContentBlock;
