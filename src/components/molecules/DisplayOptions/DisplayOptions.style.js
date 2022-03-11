import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const bounce = keyframes`
from {
  box-shadow: 0 0 0 #e7ded3;
} to {
  box-shadow: 0 0  0 15px #e7ded300
}
`;

export const ComponentContainer = styled.div`
position: absolute;
right: 20px;
top: 20px;
z-index: 1;
width: fit-content;
display: flex;
flex-direction: column;
align-items: flex-end;
`;

export const OptionsWrapper = styled.button`
  width: 42px;
  aspect-ratio: 1/1;
  background: #e8ded3;
  border: none;
  border-radius: 100%;
  display: grid;
  place-items: center;
  animation: ${bounce} 700ms;
  transition: transform 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
    animation: none;
  }

  ${({ theme }) => theme.media.desktop} {
  }
`;

export const Circles = styled.div`
  width: 4px;
  aspect-ratio: 1/1;
  background: ${({ theme }) => theme.colors.mainDark};
  border-radius: 100%;
  position: relative;

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.mainDark};
    border-radius: 100%;
    position: absolute;
    left: 0;
  }
  &::before {
    top: 9px;
  }
  &::after {
    bottom: 9px;
  }
`;

export const OptionsList = styled(motion.div)`
  background: #e8ded3;
  z-index: 1000;
  width: max-content;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 5px 10px 0 0;

  span {
    font-weight: 500;
    padding: 5px 2px;
  }

  ${({theme}) => theme.media.desktop} {
    span:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
