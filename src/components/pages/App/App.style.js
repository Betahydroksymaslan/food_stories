import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.mainBGC};
  ${({ theme }) => theme.media.desktop} {
    
  }
`;
