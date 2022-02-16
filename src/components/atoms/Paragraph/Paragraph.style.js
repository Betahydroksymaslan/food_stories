import styled from 'styled-components';

export const StyledParagraph = styled.p`
  font-size: ${({ theme, size }) => {
    if (size === 'small') return theme.fontSize.s;
    if (size === 'medium') return theme.fontSize.m;
    if (size === 'big') return theme.fontSize.l;
  }};
  font-weight: ${({ isBold }) => (isBold ? '600' : '400')};
  margin: ${({ customMargin }) => customMargin || '2px 0'};
  text-align: ${({alignText}) => alignText || 'center'};

  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme, size }) => {
      if (size === 'small') return theme.fontSize.xs;
      if (size === 'medium') return theme.fontSize.xs;
      if (size === 'big') return theme.fontSize.m;
    }};
    transition: color 0.2s ease-in-out;
    &:hover {
      cursor: ${({ hoverEffect }) => (hoverEffect ? 'pointer' : 'auto')};
      color: ${({ theme, hoverEffect }) => hoverEffect && theme.colors.black};
    }
  }
`;
