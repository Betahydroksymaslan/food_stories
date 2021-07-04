import React from 'react';
import PropTypes from 'prop-types';
import { LoaderWrapper, StyledLoader } from './Loader.style';

const Loader = (props) => {
  return (
    <LoaderWrapper>
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