import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${({theme}) => theme.colors.inputBorderLight};
  background-color: transparent;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 12px 0 10px 20px;
  outline: none;
  color: ${({theme}) => theme.colors.mainDark};
`;
