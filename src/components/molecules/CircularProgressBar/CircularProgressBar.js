import React from 'react';
import {
  Wrapper,
  PercentBox,
  Percent,
  PercentSymbol,
} from './CircularProgressBar.style';

const CircularProgressBar = ({
  percent = 0,
  recountSize = 0.75,
  indexNumber,
}) => {
  return (
    <Wrapper>
      <PercentBox percent={percent} indexNumber={indexNumber}>
        <svg>
          <circle
            cx={35 * recountSize}
            cy={35 * recountSize}
            r={35 * recountSize}
          ></circle>
          <circle
            cx={35 * recountSize}
            cy={35 * recountSize}
            r={35 * recountSize}
          ></circle>
        </svg>
        <Percent>
          <PercentSymbol>{percent}</PercentSymbol>
          <PercentSymbol small={true}>%</PercentSymbol>
        </Percent>
      </PercentBox>
    </Wrapper>
  );
};

export default CircularProgressBar;
