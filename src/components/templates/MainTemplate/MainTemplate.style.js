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
  ::-webkit-scrollbar {
    display: none;
  }
  ${({ theme }) => theme.media.desktop} {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr 0.3fr;
    max-height: 100vh;
    overflow: hidden;
    background-color: transparent;

    ::-webkit-scrollbar {
    display: block;
  }
  }
`;
