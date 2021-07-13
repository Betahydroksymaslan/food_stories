import styled from 'styled-components';

export const Template = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBGC};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  position: relative;
  ${({ theme }) => theme.media.desktop} {
    display: grid;
    grid-template-rows: 80px 1fr;
    grid-template-columns: 150px 1fr 0.4fr;
  }
`;
