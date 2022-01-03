import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import useTextInput from '../../hooks/use-text-input';
import Input from '../../components/basic/input';
import Button from '../../components/basic/button';

const PrTableHeader = ({ performSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const _setSearchValue = useTextInput(setSearchValue);
  const _performSearch = useCallback(() => {
    if (!searchValue) {
      console.warn('no value provided, error state on input');
      return;
    }

    // todo: debounce(performSearch(searchValue));
    console.log(`searching "${searchValue}"`);
  }, [searchValue, performSearch]);

  return (
    <div className='pr-table-header'>
      {/* todo: <Input value={selectedRepo} />*/}
      <Input
        value={searchValue}
        placeholder='PR Number'
        onChange={_setSearchValue}
      />
      <Button onClick={_performSearch}>Search</Button>
    </div>
  );
};

PrTableHeader.propTypes = {
  performSearch: PropTypes.func.isRequired,
};

export default PrTableHeader;
