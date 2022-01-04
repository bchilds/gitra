import React from 'react';

const Dropdown = ({ children, selectedValue, onChange, label, name }) => {
  const selectComponent = (
    <select name={name} value={selectedValue} onChange={onChange}>
      <option value=''>None</option>
      {children}
    </select>
  );
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
