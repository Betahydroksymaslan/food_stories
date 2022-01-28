import React from 'react';
import PropTypes from 'prop-types';
import { LoaderWrapper, StyledLoader } from './Loader.style';

const Loader = ({positionStatic = false}) => {
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