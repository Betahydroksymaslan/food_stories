import styled from 'styled-components';


export const SearchWrapper = styled.div`
  width: 40%;
  ${({ theme }) => theme.media.desktop} {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    margin-left: 100px;
  }
`;
