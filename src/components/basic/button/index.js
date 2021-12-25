import React from 'react';

const Button = ({ children, onClick, classNames }) => {
  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
