import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MealWrapper = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 20% auto 20px;
  grid-template-rows: max-content;
  align-items: center;
  padding: 5px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.03);
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
  font-weight: 400;
  line-height: 0.7;
  font-size: ${({ theme }) => theme.fontSize.l};
  justify-self: center;

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.05);
  }
`;
