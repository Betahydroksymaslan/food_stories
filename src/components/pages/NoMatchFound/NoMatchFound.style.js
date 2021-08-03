import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.media.desktop} {
    grid-column: 2;
    grid-row: 2/3;
  }
`;
