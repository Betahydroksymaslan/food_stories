import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressBar from 'components/molecules/CircularProgressBar/CircularProgressBar';
import { StyledMacroBox, MacroName } from './MacroBox.style';

const MacroBox = ({ indexNumber, percent, macroName, macroValue }) => {
  return (
    <StyledMacroBox indexNumber={indexNumber}>
      <MacroName>{macroName}</MacroName>
      <MacroName isBold={true}>{macroValue}g</MacroName>
      <CircularProgressBar
        indexNumber={indexNumber}
        percent={percent}
      ></CircularProgressBar>
    </StyledMacroBox>
  );
};

MacroBox.propTypes = {
  indexNumber: PropTypes.number.isRequired,
  percent: PropTypes.number,
  macroName: PropTypes.string.isRequired,
  macroValue: PropTypes.number.isRequired,
};

export default MacroBox;
