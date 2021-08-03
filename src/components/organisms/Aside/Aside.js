import React from 'react';
import PropTypes from 'prop-types';
import { AsideWrapper } from './Aside.style';
import { useSelector } from 'react-redux';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Aside = (props) => {
  const auth = useSelector((state) => state.firebase.auth);
  return (
    <AsideWrapper>
      <div>
        <Paragraph>Jesteś zalogowany jako:</Paragraph>
        <Paragraph isBold={true}>{auth.email}</Paragraph>
      </div>
    </AsideWrapper>
  );
};

Aside.propTypes = {};

export default Aside;
