import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchWrapper,
  SearchInput,
} from './Search.style';
import Input from 'components/atoms/Input/Input';

const Search = (props) => {
  
  return (
    <>
      <SearchWrapper >
        <Input search type="search" placeholder="czego szukasz?" />
      </SearchWrapper>
    </>
  );
};

Search.propTypes = {};

export default Search;
