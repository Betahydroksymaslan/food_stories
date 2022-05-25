import styled from 'styled-components';

interface CloseIconProps {
  closePosition: string;
}

export const CloseIcon = styled.div<CloseIconProps>`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  left: ${({ closePosition }) => closePosition === 'top-left' && '20px'};
  right: ${({ closePosition }) => closePosition === 'top-right' && '20px'};

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 2px;
    display: block;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.mainDark};
  }
  &::before {
    transform: translateY(12px) rotate(45deg);
  }
  &::after {
    transform: translateY(9px) rotate(-45deg);
  }

  ${({ theme }) => theme.media.desktop} {
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    transform-origin: center;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
