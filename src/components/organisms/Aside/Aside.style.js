import styled from 'styled-components';

export const AsideWrapper = styled.aside`
  display: none;
  ${({ theme }) => theme.media.desktop} {
    display: block;
    padding: 40px 0 0 0;
    grid-row: 1 / 3;
    grid-column: 3;
    background-color: ${({ theme }) => theme.colors.mainBGC};
    width: 100%;
    height: 100%;
    box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
  }
`;
