import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 70vw;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  ${({theme}) => theme.media.desktop} {
    min-width: 300px;
    max-width: 350px;
    padding: 40px 15px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
