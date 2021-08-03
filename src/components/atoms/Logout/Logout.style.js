import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 10px 30px;
  border-radius: 40px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondColor};
  box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};

  span {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.mainBGC};
    margin-left: 10px;
  }

  ${({ theme }) => theme.media.desktop} {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: none;
    background-color: transparent;
    padding: 17px;
    border-radius: 100%;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    span {
      display: none;
    }
  }
`;

export const IconWrapper = styled.div`
  width: 25px;

  svg {
    width: 100%;
  }

  ${({ theme }) => theme.media.desktop} {
    width: 28px;
    transform: translate(-3px, 2px);
  }
`;
