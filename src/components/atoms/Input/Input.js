import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledInput, IconWrapper, SearchInputWrapper } from './Input.style';
import { ReactComponent as SearchIcon } from 'assets/icons/searchIcon.svg';

const Input = forwardRef(
  ({ search, type = 'text', textareaSize, rounded = false, ...rest }, ref) => {
    return search ? (
      <SearchInputWrapper>
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
        <StyledInput
          type="search"
          placeholder="czego szukasz?"
          isSearch={search}
          rounded={rounded}
          {...rest}
          ref={ref}
        ></StyledInput>
      </SearchInputWrapper>
    ) : textareaSize ? (
      <StyledInput
        {...rest}
        type={type}
        as="textarea"
        textareaSize={textareaSize}
        ref={ref}
      />
    ) : (
      <StyledInput {...rest} type={type} rounded={rounded} ref={ref} />
    );
  }
);

Input.propTypes = {
  search: PropTypes.bool,
  textareaSize: PropTypes.bool,
  rounded: PropTypes.bool,
  type: PropTypes.string,
};

export default Input;
