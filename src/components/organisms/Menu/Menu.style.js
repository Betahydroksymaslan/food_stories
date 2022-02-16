import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const rescaleBefore = keyframes`
  from {
    transform: scaleY(0)
  } to {
    transform: scaleY(1)
  }
`;

const fadeMenuName = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const MenuWrapper = styled.nav`
  position: fixed;
  bottom: 47px;
  left: 47px;
  z-index: 100;
  width: 160%;
  border-radius: 100%;
  aspect-ratio: 1 /1;
  background-color: ${({ theme }) => theme.colors.mainYellow};
  transform-origin: center;
  padding: 20% 0 0 80%;
  transition: transform 0.3s cubic-bezier(0.25, 0.75, 0.7, 1.35);
  transform: ${({ isOpen }) =>
    isOpen ? 'translate(-50%, 50%) scale(1)' : 'translate(-50%, 50%) scale(0)'};
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};
  a:nth-child(2) {
    margin-left: 10%;
  }
  a:nth-child(3) {
    margin-left: 20%;
  }
  a:nth-child(4) {
    margin-left: 30%;
  }

  ${({ theme }) => theme.media.desktop} {
    position: static;
    grid-columns: 1;
    gap: 10px;
    transition: width 0.3s ease-in-out;
    width: ${({isOpen}) => isOpen ? '170px' : '70px'};
    height: 100vh;
    border-radius: 0;
    transform: translate(0, 0);
    padding: 100px 0 0 0;
    align-items: center;
    background: transparent;
    box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};

    a:nth-child(2) {
      margin-left: 0;
    }
    a:nth-child(3) {
      margin-left: 0;
    }
    a:nth-child(4) {
      margin-left: 0;
    }
  }
`;

export const ExpandIconBtn = styled.button`
  width: 55px;
  height: 55px;
  background: ${({ theme }) => theme.colors.mainYellow};
  border: none;
  outline: none;
  border-radius: 100%;
  display: grid;
  place-items: center;
  position: fixed;
  z-index: 1000;
  box-shadow: ${({ theme, isOpen }) => !isOpen && theme.boxShadow.inputShadow};
  bottom: 20px;
  left: 20px;

  ${({ theme }) => theme.media.desktop} {
    top: 10px;
    left: 7px;
    background: transparent;
    box-shadow: none;
    transition: background 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.05);
    }
  }
`;

export const ExpandIcon = styled.div`
  width: 25px;
  height: 3px;
  transition: background 0.3s ease-in-out;
  background-color: ${({ theme, isOpen }) =>
    isOpen ? 'transparent' : theme.colors.white};
  position: relative;
  border-radius: 3px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    top: 0;
    right: 0;
    transform-origin: center;
    transition: transform 0.3s ease-in-out;
    border-radius: 3px;
  }
  &::before {
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(0) rotate(45deg) scaleX(1.5)' : 'translateY(-8px)'};
  }
  &::after {
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(0) rotate(-45deg) scaleX(1.5)' : 'translateY(8px)'};
  }

  ${({ theme }) => theme.media.desktop} {
    background: ${({ theme, isOpen }) =>
      isOpen ? 'transparent' : theme.colors.mainDark};
    height: 2px;

    &::before,
    &::after {
      background: ${({ theme }) => theme.colors.mainDark};
    }

    &::before {
      transform: ${({ isOpen }) =>
        isOpen ? 'translateY(0) rotate(45deg)' : 'translateY(-8px)'};
    }
    &::after {
      transform: ${({ isOpen }) =>
        isOpen ? 'translateY(0) rotate(-45deg)' : 'translateY(8px)'};
    }
  }
`;

const activeClassName = 'active-link';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  margin: 10px 0;
  transform-origin: center;
  position: relative;

  &.${activeClassName} {
    span {
      color: ${({theme}) => theme.colors.mainGreen};
    }
    svg {
      path,
      line {
        transition: all 0.3s ease-in-out;
        stroke-width: 18;
      stroke: ${({theme}) => theme.colors.mainGreen};
    }
  }
    }
  }

  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    display: flex;
    margin: 0;
    padding: 10px 0 10px 20px;
    justify-content: flex-start;
    transition: background 0.1s ease-in-out;

    &:hover {
      background: rgba(0,0,0,0.04);
    }

    &::before {
    content: '';
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 6px;
    height: 100%;
    background: ${({theme}) => theme.colors.mainGreen};
    transform-origin: center;
    animation: ${rescaleBefore} 0.3s 1 both ease-in-out;
  }

    &.${activeClassName}::before {
      display: block;
      
    }
  }
`;

export const LinkName = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  transition: color 0.3s ease-in-out;
  

  ${({ theme }) => theme.media.desktop} {
    display: ${({ isOpen }) => (isOpen ? 'inline' : 'none')};
    color: ${({ theme }) => theme.colors.mainDark};
    font-size: ${({ theme }) => theme.fontSize.xs};
    margin-left: 15px;
    animation: ${fadeMenuName} 0.3s 1 both ease-in-out;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    path,
    line {
      stroke: white;
    }
  }

  ${({ theme }) => theme.media.desktop} {
    svg {
      width: 30px;
      height: 30px;
      margin: 0;
      path,
      line {
        stroke: ${({ theme }) => theme.colors.mainDark};
      }
    }
  }
`;
