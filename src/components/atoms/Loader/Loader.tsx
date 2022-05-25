import React from 'react';
import PropTypes from 'prop-types';
import { LoaderWrapper, StyledLoader } from './Loader.style';

interface LoaderType {
  positionStatic: boolean;
}

const Loader = ({positionStatic = false}: LoaderType) => {
  return (
    <LoaderWrapper positionStatic={positionStatic}>
      <StyledLoader>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </StyledLoader>
    </LoaderWrapper>
  );
};

Loader.propTypes = {};

export default Loader;