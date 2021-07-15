import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledInput, IconWrapper, SearchInputWrapper } from './Input.style';
import { ReactComponent as SearchIcon } from 'assets/icons/searchIcon.svg';

const Input = forwardRef(({ search, ...rest }, ref) => {
  return search ? (
    <SearchInputWrapper>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <StyledInput
        type="search"
        placeholder="czego szukasz?"
        isSearch={search}
        {...rest}
        ref={ref}
      ></StyledInput>
    </SearchInputWrapper>
  ) : (
    <StyledInput {...rest} ref={ref} />
  );
});

Input.propTypes = {
  search: PropTypes.bool,
};

export default Input;
