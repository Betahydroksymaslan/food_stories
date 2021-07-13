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
  background-color: ${({ theme }) => theme.colors.mainColor};
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
  ${({ theme }) => theme.media.desktop} {
  }
  &.${activeClassName} {
    svg {
      animation: ${expanseAnimation} 0.5s cubic-bezier(0.28, 0.84, 0.42, 1) 1
        forwards;
    }
    #favouriteIconID {
      path {
        fill: ${({ theme }) => theme.colors.secondColor};
      }
    }
    #userIconID {
      path {
        fill: ${({ theme }) => theme.colors.secondColor};
      }
      
    }
    #homeIconID {
      path {
        stroke: ${({ theme }) => theme.colors.secondColor};
      }
    }
    #overlapIconID {
      path {
        stroke: ${({ theme }) => theme.colors.secondColor};
      }
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
    height: 30px;
  }
  #favouriteIconID {
    height: 30px;
  }
  #homeIconID {
    height: 27px;
  }
`;
