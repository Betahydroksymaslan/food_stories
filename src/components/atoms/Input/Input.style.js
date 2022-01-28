import styled from 'styled-components';

export const StyledInput = styled.input`
  width: ${({ small }) => (small ? '100px' : '100%')};
  height: ${({ textareaSize }) => (textareaSize ? '120px' : 'auto')};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  background-color: ${({ theme }) => theme.colors.mainBGC};
  box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
  border-radius: ${({textareaSize}) => textareaSize ? '10px' : '30px'};
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: ${({ isSearch }) =>
    isSearch ? '12px 10px 10px 60px' : '12px 0 10px 20px'};
  outline: none;
  resize: none;
  color: ${({ theme }) => theme.colors.mainDark};
  &::placeholder {
    color: ${({ theme }) => theme.colors.inputBorder};
    font-weight: 500;
  }

  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 90%;
`;

export const IconWrapper = styled.div`
  width: 20px;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  svg {
    width: 100%;
    path {
      fill: ${({ theme }) => theme.colors.mainDark};
    }
  }
`;