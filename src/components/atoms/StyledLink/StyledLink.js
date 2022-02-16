import React from 'react';
import PropTypes from 'prop-types';
import {CustomLink} from './StyledLink.style';

const StyledLink = ({children, to}) => {
    return (
        <CustomLink to={to}>
            {children}
        </CustomLink>
    );
};

StyledLink.propTypes = {
    
};

export default StyledLink;