import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';

const expanseAfter = keyframes`
    to {
        transform: translate(-50%, -50%) scale(10);
        opacity: 0;
    }
`;

export const LinkWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 90% 10%;
`;

export const MealWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 20% 80%;
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
  font-size: 13px;
  font-weight: 600;
  padding: 0 15px;
`;

export const DeleteTab = styled.div`
  width: 90%;
  aspect-ratio: 1/1;
  border-radius: 5px;
  display: grid;
  place-items: center;
  font-weight: 300;
  line-height: 0.4;
  font-size: ${({ theme }) => theme.fontSize.xl};
  align-self: center;

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.05);
  }
`;
