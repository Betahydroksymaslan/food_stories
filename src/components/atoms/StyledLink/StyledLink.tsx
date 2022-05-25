import React from 'react';
import { CustomLink } from './StyledLink.style';

interface StyledLinkType {
  children: string;
  to: string;
}

const StyledLink = ({ children, to }: StyledLinkType) => {
  return <CustomLink to={to}>{children}</CustomLink>;
};

export default StyledLink;
