import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  background-color: transparent;
  box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
  border-radius: 30px;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 12px 0 10px 20px;
  outline: none;
  color: ${({ theme }) => theme.colors.mainDark};
  &::placeholder {
    color: ${({theme}) => theme.colors.inputBorder};
    font-weight: 500;
  }
`;
