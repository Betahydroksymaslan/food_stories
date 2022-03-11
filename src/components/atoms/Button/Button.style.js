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
  border: ${({ theme }) => `2px solid ${theme.colors.secondColor}`};
  width: ${({ wide }) => wide && '100%'};
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.colors.white : theme.colors.secondColor};
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.secondColor : theme.colors.white};
  border-radius: 10px;
  padding: ${({ wide, size }) => {
    if (wide) return '10px 20px';
    if (size === 's') return '6px 15px';
    if (size === 'm') return '10px 20px';
    if (size === 'l') return '12px 25px';
  }};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 600;
  outline: none;
  box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
  position: relative;
  overflow: hidden;
  z-index: 0;

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
    width: ${({ wide }) => (wide ? '60px' : '20px')};
    height: ${({ wide }) => (wide ? '60px' : '20px')};
    animation: ${({ animationTriger }) =>
      animationTriger &&
      css`
        ${clickAnimation} 0.8s cubic-bezier(0.28, 0.84, 0.42, 1) 1
        forwards
      `};
  }

  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xs};
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
`;
