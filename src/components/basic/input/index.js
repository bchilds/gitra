import React from 'react';
import classnames from 'classnames';

const Input = ({ onChange, classNames, value }) => {
  return (
    <input
      onChange={onChange}
      className={classnames(classNames, 'input-styles')}
      value={value}
    />
  );
};

export default Input;
