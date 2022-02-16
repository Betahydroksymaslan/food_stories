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

  & span {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 600;
  }

  ${({ theme }) => theme.media.desktop} {
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transform-origin: center;

    &:hover svg {
      transform: scale(1.1);
    }

    span {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 90%;

  svg {
    transition: transform 0.2s ease-in-out;
    width: 100%;
  }
`;
