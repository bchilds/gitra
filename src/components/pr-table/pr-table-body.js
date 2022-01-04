import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
// import Button from '../../components/basic/button';
import { noop, emptyArray } from '../../prop-types/empty';

const PrTableBody = ({ pullRequests, onPrSelect, showEmptyState }) => {
  const hasNoResults = showEmptyState && pullRequests.length === 0;

  return (
    <div
      className={classnames('pr-table-body', {
        'pr-table-body-border': !!pullRequests?.length,
      })}
    >
      {hasNoResults && <div className='pr-table-empty'>No PRs Found</div>}
      {!hasNoResults &&
        pullRequests.map((pullRequest) => {
          return (
            <div
              key={pullRequest.merge_commit_sha}
              className='pr-table-row'
              onClick={(pullRequest) => onPrSelect(pullRequest)}
            >
              <div className='pr-table-row-content'>
                <h4>{pullRequest.title}</h4>
                <a href={pullRequest.html_url} target='_blank' rel='noreferrer'>
                  {pullRequest.head.repo.full_name}/{pullRequest.number}
                </a>
                <span>JIRA url from description after parsing</span>
              </div>
              <div className='pr-table-row-action'>Awesome Select Icon</div>
            </div>
          );
        })}
    </div>
  );
};

PrTableBody.propTypes = {
  pullRequests: PropTypes.arrayOf(PropTypes.object), //figure out PR shape from GH
  onPrSelect: PropTypes.func,
  showEmptyState: PropTypes.bool,
};

PrTableBody.defaultProps = {
  pullRequests: emptyArray,
  onPrSelect: noop,
  showEmptyState: false,
};

export default PrTableBody;
