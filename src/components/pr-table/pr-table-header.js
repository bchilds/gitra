import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import useTextInput from '../../hooks/use-text-input';
import Input from '../../components/basic/input';
import Button from '../../components/basic/button';
import Dropdown from '../../components/basic/dropdown';
import { getPrFromRepoByNumber } from '../../helpers/octokit';

const PrTableHeader = ({ performSearch }) => {
  // repoSelection
  const [selectedRepo, setSelectedRepo] = useState('');
  const _setSelectedRepo = useCallback(
    (e) => {
      const value = e?.target?.value;
      setSelectedRepo(value ?? '');
    },
    [selectedRepo, setSelectedRepo]
  );

  // pr search
  const [searchValue, setSearchValue] = useState('');
  const _setSearchValue = useTextInput(setSearchValue);
  const _performSearch = useCallback(async () => {
    if (!searchValue) {
      console.warn('no value provided, error state on input');
      return;
    }

    // todo: debounce(performSearch(searchValue));
    console.log(`searching "${searchValue}"`);
    const result = await getPrFromRepoByNumber({
      owner: 'shipstation',
      repo: selectedRepo,
      pull_number: searchValue,
    });
    console.log('RESULT: ', result);
  }, [selectedRepo, searchValue, performSearch]);

  return (
    <div className='pr-table-header'>
      {/* todo: <Input value={selectedRepo} />*/}
      <Dropdown
        name='repo'
        onChange={_setSelectedRepo}
        selectedValue={selectedRepo}
        label={'Select target repo'}
      >
        <option value='shipstation'>Shipstation</option>
        <option value='shipstation-ui'>SS-UI</option>
      </Dropdown>
      <Input
        value={searchValue}
        placeholder='PR Number'
        onChange={_setSearchValue}
        type='number'
      />
      <Button onClick={_performSearch}>Search</Button>
    </div>
  );
};

PrTableHeader.propTypes = {
  performSearch: PropTypes.func.isRequired,
};

export default PrTableHeader;
