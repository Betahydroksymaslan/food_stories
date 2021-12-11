import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledInput, IconWrapper, SearchInputWrapper } from './Input.style';
import { ReactComponent as SearchIcon } from 'assets/icons/searchIcon.svg';

const Input = forwardRef(({ search, textareaSize, ...rest }, ref) => {
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
  ) : textareaSize ? (
    <StyledInput {...rest} as="textarea" textareaSize={textareaSize} ref={ref} />
  ) : (
    <StyledInput {...rest} ref={ref} />
  );
});

Input.propTypes = {
  search: PropTypes.bool,
  textareaSize: PropTypes.bool,
};

export default Input;