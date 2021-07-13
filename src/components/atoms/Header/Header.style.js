import styled from 'styled-components';

export const StyledHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 500;
  margin: 20px 0 20px 40px;
  align-self: flex-start;
  position: relative;

  &::before {
    content: '';
    width: 17px;
    height: 3px;
    background-color: ${({theme}) => theme.colors.mainDark};
    display: block;
    position: absolute;
    bottom: 0;
    left: -16px;
  }
`;
