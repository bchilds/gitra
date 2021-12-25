import React from 'react';

const Input = ({ onChange, classNames, value }) => {
  return (
    <input onChange={onChange} className={classNames} value={value} />
  );
};

export default Input;
