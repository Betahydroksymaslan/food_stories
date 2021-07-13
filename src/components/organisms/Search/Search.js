import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from 'assets/icons/searchIcon.svg';
import {
  IconWrapper,
  SearchWrapper,
  SearchInput,
  StatusInfo,
  StyledSpan,
} from './Search.style';
import { useSelector } from 'react-redux';

const Search = (props) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const auth = useSelector((state) => state.firebase.auth);

  const toggleSearchOpen = () => setIsSearchOpen((prevState) => !prevState);
  return (
    <>
      <SearchWrapper isOpen={isSearchOpen}>
        <StatusInfo>
          <StyledSpan>Zalogowany jako:</StyledSpan>
          <StyledSpan isBold>{auth.email}</StyledSpan>
        </StatusInfo>
        <SearchInput type="text" placeholder="czego szukasz?" />
      </SearchWrapper>
      <IconWrapper onClick={toggleSearchOpen}>
        <SearchIcon />
      </IconWrapper>
    </>
  );
};

Search.propTypes = {};

export default Search;
