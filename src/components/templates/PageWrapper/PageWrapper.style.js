import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0 80px 0;
  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    inline-size: min(100%);
    margin-inline: auto;
    grid-column: 2;
    grid-row: 1/-1;
    height: 100%;
    padding: 0;
    overflow-y: scroll;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
