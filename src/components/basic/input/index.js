import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { noop } from '../../../prop-types/empty';

const Input = ({ onChange, classNames, value, placeholder, type }) => {
  return (
    <input
      onChange={onChange}
      className={classnames(classNames, 'input-styles')}
      value={value}
      placeholder={placeholder}
      type={type}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  classNames: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['string', 'number']), //others...
};

Input.defaultProps = {
  onChange: noop,
  classNames: '',
  value: undefined,
  placeholder: undefined,
  type: 'string',
};

export default Input;
