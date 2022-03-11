import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './RecipeShortInfo.style';
import Tooltip from 'components/atoms/Tooltip/Tooltip';
import { useEffect } from 'react';

const RecipeShortInfo = ({ children, name, tipText }) => {
  const boxRef = useRef(null);
  const [tooltipActive, setTooltipActive] = useState(false);

  const showTooltip = () => setTooltipActive(true);
  const hideTooltip = () => setTooltipActive(false);

  useEffect(() => {
    if (!boxRef.current) return;

    const toggleState = () => {
      /* if (tooltipActive) {
        hideTooltip();
      } */
      if (!tooltipActive) {
        showTooltip();
      }
    };

    boxRef.current.addEventListener('click', toggleState, false);

    return () => {
      if (boxRef.current) {
        boxRef.current.removeEventListener('click', toggleState, false);
      }
    };
  }, [boxRef, tooltipActive]);

  return (
    <Wrapper ref={boxRef} aria-describedby="tooltip">
      {children}
      <span>{name}</span>
      {tooltipActive ? <Tooltip boxRef={boxRef} close={hideTooltip}>{tipText}</Tooltip> : null}
    </Wrapper>
  );
};

RecipeShortInfo.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tipText: PropTypes.string,
};

export default RecipeShortInfo;
