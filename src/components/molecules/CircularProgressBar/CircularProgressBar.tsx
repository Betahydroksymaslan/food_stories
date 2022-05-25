import React from 'react';
import {
  Wrapper,
  PercentBox,
  Percent,
  PercentSymbol,
} from './CircularProgressBar.style';

interface Progresstype {
  percent: number;
  recountSize: number;
  indexNumber: number;
}

const CircularProgressBar = ({
  percent = 0,
  recountSize = 0.75,
  indexNumber,
}: Progresstype) => {
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
          <PercentSymbol>{ isNaN(percent)  ? 0 : percent}</PercentSymbol>
          <PercentSymbol small={true}>%</PercentSymbol>
        </Percent>
      </PercentBox>
    </Wrapper>
  );
};

export default CircularProgressBar;
