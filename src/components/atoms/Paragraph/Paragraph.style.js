import styled from 'styled-components';

export const StyledParagraph = styled.p`
  font-size: ${({ theme, size }) => {
    if (size === 'small') return theme.fontSize.s;
    if (size === 'medium') return theme.fontSize.m;
    if (size === 'big') return theme.fontSize.l;
  }};
  font-weight: ${({ isBold }) => (isBold ? '600' : '400')};
  margin: 2px 0;
  text-align: center;
`;
