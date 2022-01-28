import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  ${({ theme }) => theme.media.desktop} {
    background-color: ${({ theme }) => theme.colors.mainBGCdesktop};
  }
`;
