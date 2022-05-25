import { forwardRef } from 'react';
import { StyledInput, IconWrapper, SearchInputWrapper } from './Input.style';
import { ReactComponent as SearchIcon } from 'assets/icons/searchIcon.svg';

interface InputProps {
  search: boolean;
  type: string;
  textareaSize: boolean;
  rounded: boolean;
  small: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ search, type = 'text', textareaSize, rounded = false, small }, ref) => {
    return search ? (
      <SearchInputWrapper>
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
        <StyledInput
          type={type}
          small={small}
          placeholder="czego szukasz?"
          isSearch={search}
          rounded={rounded}
          ref={ref}
          textareaSize={textareaSize}
        ></StyledInput>
      </SearchInputWrapper>
    ) : (
      <StyledInput
        small={small}
        type={type}
        rounded={rounded}
        isSearch={search}
        textareaSize={textareaSize}
        ref={ref}
      />
    );
  }
);

export default Input;
