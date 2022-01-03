import React from 'react';
import classnames from 'classnames';

const Input = ({ onChange, classNames, value, placeholder }) => {
  return (
    <input
      onChange={onChange}
      className={classnames(classNames, 'input-styles')}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
