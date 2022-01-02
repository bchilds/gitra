import React from 'react';
import classnames from 'classnames';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={classnames(className, 'button-styles')}
    >
      {children}
    </button>
  );
};

export default Button;
