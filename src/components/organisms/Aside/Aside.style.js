import styled from 'styled-components';

export const AsideWrapper = styled.aside`
  display: none;
  ${({ theme }) => theme.media.desktop} {
    display: block;
    grid-row: 1 / 3;
    grid-column: 3;
    border-left: 1px solid ${({ theme }) => theme.colors.inputBorder};
  }
`;
