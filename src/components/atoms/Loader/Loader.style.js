import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
`;

export const LoaderWrapper = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  overflow: hidden;
  background: none;
`;

export const StyledLoader = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.61);
  backface-visibility: hidden;
  transform-origin: 0 0;
  & > div {
    position: absolute;
    width: 10px;
    height: 10px;
    animation: ${animation} 1.408450704225352s cubic-bezier(0.5, 0, 0.5, 1)
      infinite;
    transform-origin: 50px 50px;
  }
  & > div > div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  & > div:nth-child(0) {
    animation-delay: 0s;
  }
  & > div:nth-child(0) > div {
    background: #6f66ed;
    transform: translate(74.3540735907757px, 67.52417287332267px);
  }
  & > div:nth-child(1) {
    animation-delay: -0.062s;
  }
  & > div:nth-child(1) > div {
    background: #8366ed;
    transform: translate(67.52417287332267px, 74.3540735907757px);
  }
  & > div:nth-child(2) {
    animation-delay: -0.125s;
  }
  & > div:nth-child(2) > div {
    background: #a466ed;
    transform: translate(59.15928699750833px, 79.1835427029176px);
  }
  & > div:nth-child(3) {
    animation-delay: -0.187s;
  }
  & > div:nth-child(3) > div {
    background: #a48fff;
    transform: translate(49.829469112141915px, 81.68345987083099px);
  }
  & > div:nth-child(4) {
    animation-delay: -0.25s;
  }
  & > div:nth-child(4) > div {
    background: #ac7df7;
    transform: translate(40.17053088785809px, 81.68345987083099px);
  }
  & > div:nth-child(5) {
    animation-delay: -0.312s;
  }
  & > div:nth-child(5) > div {
    background: #6f66ed;
    transform: translate(30.84071300249169px, 79.1835427029176px);
  }
  & > div:nth-child(6) {
    animation-delay: -0.375s;
  }
  & > div:nth-child(6) > div {
    background: #8366ed;
    transform: translate(22.475827126677334px, 74.3540735907757px);
  }
  & > div:nth-child(7) {
    animation-delay: -0.437s;
  }
  & > div:nth-child(7) > div {
    background: #a466ed;
    transform: translate(15.645926409224302px, 67.52417287332267px);
  }
`;
