import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledTooltip = styled(motion.span)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  position: absolute;
  top: 115%;
  left: ${({xPosition}) => xPosition || 0};
  width: max-content;
  background: rgba(0, 0, 0, 0.7);
  color: ${({ theme }) => theme.colors.white};
  padding: 7px 10px;
  border-radius: 5px;
  z-index: 10;
`;
