import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 150px;
  height: 180px;
  margin: 20px 0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
  background-color: ${({ theme }) => theme.colors.white};
  padding-bottom: 10px;

  & span {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 600;
  }

  ${({ theme }) => theme.media.desktop} {
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transform-origin: center;
    border: 3px solid transparent;
    transition: border-color 0.2s ease-in-out;

    &:hover {
      border-color: ${({ theme }) => theme.colors.secondYellow};
    }

    span {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 90%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;
