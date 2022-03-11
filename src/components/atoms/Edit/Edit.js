import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as EditIcon } from 'assets/icons/editIcon.svg';
import { Wrapper } from './Edit.style';

const Edit = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <EditIcon />
    </Wrapper>
  );
};

Edit.propTypes = {};

export default Edit;
