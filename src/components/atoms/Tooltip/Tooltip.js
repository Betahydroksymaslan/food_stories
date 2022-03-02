import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledTooltip } from './Tooltip.style';
import { motion } from 'framer-motion';

const Tooltip = ({ children, close, xPosition }) => {
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (!tooltipRef.current) return;

    const handleOutsideClick = (e) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        close && close();
      }
    };

    document.addEventListener('click', handleOutsideClick, true);

    return () =>
      document.removeEventListener('click', handleOutsideClick, true);
  }, [close]);

  return (
    <StyledTooltip
      ref={tooltipRef}
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

Tooltip.propTypes = {
  xPosition: PropTypes.string,
  close: PropTypes.func,
  children: PropTypes.string,
};

export default Tooltip;
