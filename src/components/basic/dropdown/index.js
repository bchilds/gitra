import React from 'react';

const Dropdown = ({ children, onOptionSelect, label }) => {
  const selectComponent = <select onChange={onOptionSelect}>{children}</select>;
  return label ? (
    <label>
      {label}
      {selectComponent}
    </label>
  ) : (
    selectComponent
  );
};

export default Dropdown;
