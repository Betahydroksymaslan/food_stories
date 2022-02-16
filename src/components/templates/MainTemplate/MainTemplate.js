import React from 'react';
import PropTypes from 'prop-types';
import { Template } from './MainTemplate.style';
import Menu from 'components/organisms/Menu/Menu';
import { useLocation } from 'react-router-dom';
import { SIGNIN, SIGNUP } from 'constants/routes';
import Aside from 'components/organisms/Aside/Aside';
import { useMedia } from 'hooks/useMedia';

const MainTemplate = ({ children }) => {
  const media = useMedia('(max-width: 600px)');

  const location = useLocation();
  return (
    <Template>
      {location.pathname !== SIGNIN && location.pathname !== SIGNUP && <Menu />}
      {location.pathname !== SIGNIN && location.pathname !== SIGNUP && (
        <Aside />
      )}
      {children}
    </Template>
  );
};

MainTemplate.propTypes = {};

export default MainTemplate;
