import styled, { keyframes, css } from 'styled-components';

const clickAnimation = keyframes`
    from {
        transform: translate(-50% ,-50%) scale(0);
        opacity: 1;
    }
    99% {
        transform: translate(-50% ,-50%) scale(8);
        opacity: 0;
    }
    to {
        transform: translate(-50% ,-50%) scale(0);
    }
`;

export const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.mainBGC};
  border-radius: 20px;
  padding: 8px 20px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 600;
  outline: none;
  box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
  position: relative;
  overflow: hidden;

  &:disabled {
    opacity: 0.5;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 100%;
    background-color: #cbf7f7;
    width: 20px;
    height: 20px;
    animation: ${({ animationTriger }) =>
      animationTriger &&
      css`
        ${clickAnimation} 0.8s cubic-bezier(0.28, 0.84, 0.42, 1) 1
        forwards
      `};
  }
`;
