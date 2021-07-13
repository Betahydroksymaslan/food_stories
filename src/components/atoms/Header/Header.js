import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeader } from './Header.style';

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

Header.propTypes = {};

export default Header;
