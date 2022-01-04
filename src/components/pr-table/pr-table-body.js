import React from 'react';
import PropTypes from 'prop-types';
import { noop, emptyArray } from '../../prop-types/empty';

const PrTableBody = ({ pullRequests, onPrSelect }) => {
  return (
    <div className='pr-table-body'>
      {pullRequests.map((pullRequest) => {
        return (
          <div
            className='pr-table-row'
            onClick={(pullRequest) => onPrSelect(pullRequest)}
          >
            PR data
          </div>
        );
      })}
    </div>
  );
};

PrTableBody.propTypes = {
  pullRequests: PropTypes.array(PropTypes.object), //figure out PR shape from GH
  onPrSelect: PropTypes.func,
};

PrTableBody.defaultProps = {
  pullRequests: emptyArray,
  onPrSelect: noop,
};

export default PrTableBody;
