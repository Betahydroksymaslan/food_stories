import styled from 'styled-components';
import {motion} from 'framer-motion';

export const FoodBoxesWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px 0;
  ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
    gap: 20px 40px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
`;
