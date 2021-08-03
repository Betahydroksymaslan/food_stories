import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 80px;
  ${({ theme }) => theme.media.desktop} {
    grid-column: 2/3;
    grid-row: 2/3;
    height: 100%;
    padding: 0;
    overflow-y: scroll;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;
