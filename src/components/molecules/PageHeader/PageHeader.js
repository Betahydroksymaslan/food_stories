import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper, StyledHeader} from './PageHeader.style'

const PageHeader = ({children, text}) => {
    return (
        <Wrapper>
            {children}
            <StyledHeader>{text}</StyledHeader>
        </Wrapper>
    );
};

PageHeader.propTypes = {
    
};

export default PageHeader;