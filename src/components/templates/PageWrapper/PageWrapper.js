import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './PageWrapper.style';

const PageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

PageWrapper.propTypes = {};

export default PageWrapper;
