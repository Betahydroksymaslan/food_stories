import { useEffect } from 'react';
import { StyledTooltip } from './Tooltip.style';
import { motion } from 'framer-motion';

interface TooltipType {
  children: string;
  close: () => void;
  xPosition: string;
}

const Tooltip = ({ children, close, xPosition }: TooltipType) => {
  useEffect(() => {
    const handleOutsideClick = () => {
      if (true) {
        close && close();
      }
    };

    document.addEventListener('click', handleOutsideClick, true);

    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, [close]);

  return (
    <StyledTooltip
      id="tooltip"
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      xPosition={xPosition}
      as={motion.span}
    >
      {children}
    </StyledTooltip>
  );
};

export default Tooltip;
