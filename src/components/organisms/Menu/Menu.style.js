import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const expanseAnimation = keyframes`
  from {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  to {
    transform: scaleX(1);
  }
`;

const expanseWrapperAnimation = keyframes`
  from {
    transform: translate(-50%, -50%) scale(1);
    background-color: transparent;
  }
  1% {
    transform: translate(-50%, -50%) scale(1);
    background-color: #cbf7f7;
  }
  99% {
    transform: translate(-50%, -50%) scale(5);
    background-color: transparent;
  }
  to {
    transform: translate(-50%, -50%) scale(0);
    background-color: transparent;
  }
`;

export const MenuWrapper = styled.nav`
  width: 90%;
  height: 55px;
  background-color: ${({ theme }) => theme.colors.secondColor};
  position: fixed;
  bottom: 0;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  box-shadow: 0 -1px 10px rgba(115, 124, 142, 0.09);

  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    height: 100%;
    transform: translateX(0);
    position: static;
    grid-column: 1/1;
    grid-row: 1/3;
    border-bottom-right-radius: 35px;
    border-top-left-radius: 0;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 70px;
  }
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mainBGC};
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 0;
  position: relative;
  padding: 2px;
  background-color: transparent;
  border-radius: 100%;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &.${activeClassName} {
    background-color: rgba(255, 255, 255, 0.2);
    svg {
      animation: ${expanseAnimation} 0.5s cubic-bezier(0.28, 0.84, 0.42, 1) 1
        forwards;
    }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: transparent;
      width: 30px;
      height: 30px;
      border-radius: 100%;
    }
    &.${activeClassName}::after {
      animation: ${expanseWrapperAnimation} 0.5s
        cubic-bezier(0.28, 0.84, 0.42, 1) 1 forwards;
    }
  }
  ${({ theme }) => theme.media.desktop} {
    margin-bottom: 15px;
    padding: 8px;
    border-radius: 100%;
    background-color: transparent;
    &.${activeClassName} {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

export const IconWrapper = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    path {
      transition: all 0.4s ease-in-out;
    }
    height: 25px;
  }

  #homeIconID {
    height: 23px;
  }

  ${({ theme }) => theme.media.desktop} {
    svg {
      height: 22px;
    }
    #homeIconID {
      height: 19px;
    }
  }
`;
