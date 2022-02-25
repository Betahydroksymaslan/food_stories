import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './RecipeShortInfo.style';
import Tooltip from 'components/atoms/Tooltip/Tooltip';

const RecipeShortInfo = ({ children, name, tipText }) => {
  const [tooltipActive, setTooltipActive] = useState(false);

  const showTooltip = () => setTooltipActive(true);
  const hideTooltip = () => setTooltipActive(false);

  return (
    <Wrapper onClick={showTooltip} aria-describedby="tooltip">
      {children}
      <span>{name}</span>
      {tooltipActive ? <Tooltip close={hideTooltip}>{tipText}</Tooltip> : null}
    </Wrapper>
  );
};

RecipeShortInfo.propTypes = {};

export default RecipeShortInfo;
