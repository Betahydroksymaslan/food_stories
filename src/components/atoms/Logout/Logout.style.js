import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 10px 30px;
  border-radius: 10px;
  align-items: center;
  background-color: transparent /* ${({ theme }) => theme.colors.white} */;
  border: 2px solid ${({ theme }) => theme.colors.secondColor};

  span {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secondColor};
    margin-left: 10px;
  }

  ${({ theme }) => theme.media.desktop} {
    position: absolute;
    border: none;
    bottom: 40px;
    left: 5px;
    z-index: 1000;
    box-shadow: none;
    background-color: transparent;
    padding: 17px;
    border-radius: 100%;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    span {
      display: none;
    }
  }
`;

export const IconWrapper = styled.div`
  width: 25px;
  display: grid;
  place-items: center;

  svg {
    width: 100%;
    path {
      fill: ${({ theme }) => theme.colors.secondColor};
    }
  }

  ${({ theme }) => theme.media.desktop} {
    width: 28px;
    transform: translate(-3px, 2px);

    svg {
      path {
        fill: ${({ theme }) => theme.colors.mainDark};
      }
    }
  }
`;
