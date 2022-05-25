import styled, { keyframes } from 'styled-components';

interface ProgressType {
  indexNumber?: number;
  percent?: number;
  small?: boolean;
}

const circleSizeConverter = 0.75;
const animationStrokeValue = 220 * circleSizeConverter;
const circleAnimation = keyframes`
    0% {      
        stroke-dashoffset: ${animationStrokeValue};
    }
    100% {

    }
`;

export const Wrapper = styled.div`
  width: calc(75 * ${circleSizeConverter}px);
  height: calc(75 * ${circleSizeConverter}px);
  margin-top: 15px;
`;

export const PercentBox = styled.div<ProgressType>`
  position: relative;

  svg {
    position: relative;
    width: calc(75 * ${circleSizeConverter}px);
    height: calc(75 * ${circleSizeConverter}px);

    circle {
      width: calc(75 * ${circleSizeConverter}px);
      height: calc(75 * ${circleSizeConverter}px);
      fill: none;
      stroke-width: 3px;
      transform: translate(
        calc(2.5 * ${circleSizeConverter}px),
        calc(2.5 * ${circleSizeConverter}px)
      );
      stroke-dasharray: calc(220 * ${circleSizeConverter});
      stroke-dashoffset: calc(220 * ${circleSizeConverter});
      stroke-linecap: round;

      &:nth-child(1) {
        stroke-dashoffset: 0;
        stroke: ${({ indexNumber }) => {
          if (indexNumber === 0) return '#e1ecf4';
          if (indexNumber === 1) return '#e9f4c5';
          if (indexNumber === 2) return '#fae0cb';
          return 'red';
        }};
      }
      &:nth-child(2) {
        stroke-dashoffset: ${({ percent }) =>
          percent
            ? `calc((220 * ${circleSizeConverter}) - ((220 * ${circleSizeConverter}) * ${percent}) / 100)`
            : 'none'};
        stroke: ${({ indexNumber }) => {
          if (indexNumber === 0) return '#c7dbea';
          if (indexNumber === 1) return '#b7e754';
          if (indexNumber === 2) return '#f4b789';
          return 'red';
        }};
        animation: ${circleAnimation} 2s 1s cubic-bezier(0.08, -0.01, 0.01, 1)
          both;
      }
    }
  }
`;

export const Percent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PercentSymbol = styled.span<ProgressType>`
  font-size: ${({ small }) => (small ? '11px' : '18px')};
`;
