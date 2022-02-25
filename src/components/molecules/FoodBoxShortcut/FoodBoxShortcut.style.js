import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';

const expanseAfter = keyframes`
    to {
        transform: translate(-50%, -50%) scale(10);
        opacity: 0;
    }
`;

export const MealWrapper = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 20% auto 20px;
  grid-template-rows: max-content;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.03);
  }

  &::after {
    content: '';
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.3;
    background: gray;
    animation: ${({ animationState }) =>
      animationState &&
      css`
        ${expanseAfter} 1 0.5s both ease-in-out
      `};
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  grid-column: 1;
  margin-right: 20px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MealName = styled.span`
  width: 100%;
  font-size: 13px;
  font-weight: 600;
  padding: 0 15px;
`;

export const DeleteTab = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  display: grid;
  place-items: center;
  font-weight: 300;
  line-height: 0.7;
  font-size: ${({ theme }) => theme.fontSize.l};
  justify-self: center;

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.05);
  }
`;
