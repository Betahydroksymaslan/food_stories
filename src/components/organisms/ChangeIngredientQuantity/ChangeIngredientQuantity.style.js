import styled from 'styled-components';

export const EditQuantityWrapper = styled.div`
  width: 80vw;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.media.desktop} {
    width: max-content;
  }
`;

export const InlineWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;