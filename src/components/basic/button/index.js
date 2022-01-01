import React from 'react';
import classnames from 'classnames';

const Button = ({ children, onClick, classNames }) => {
  return (
    <button
      onClick={onClick}
      className={classnames(classNames, 'button-styles')}
    >
      {children}
    </button>
  );
};

export default Button;
