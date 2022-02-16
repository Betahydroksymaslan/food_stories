import styled from 'styled-components';
import { motion } from 'framer-motion';

export const OptionsWrapper = styled.div`
  width: 42px;
  aspect-ratio: 1/1;
  background: #e8ded3;
  border-radius: 100%;
  display: grid;
  place-items: center;
  position: absolute;
  z-index: 1000;
  top: 20px;
  right: 20px;
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
  position: absolute;
  top: 25px;
  right: 0;
  background: #e8ded3;
  z-index: 1000;
  width: max-content;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-weight: 500;
    padding: 5px 2px;
  }
`;
