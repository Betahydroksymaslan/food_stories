import React from 'react';
import PropTypes from 'prop-types';
import { SearchWrapper } from './Search.style';
import Input from 'components/atoms/Input/Input';

const Search = ({ ...rest }) => {
  return (
    <>
      <SearchWrapper>
        <Input search type="search" placeholder="czego szukasz?" {...rest} />
      </SearchWrapper>
    </>
  );
};

Search.propTypes = {};

export default Search;
