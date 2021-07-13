import React from 'react';
import PropTypes from 'prop-types';
import { Template } from './MainTemplate.style';
import Menu from 'components/organisms/Menu/Menu';
import { useLocation } from 'react-router-dom';
import { SIGNIN, SIGNUP } from 'constants/routes';
import Aside from 'components/organisms/Aside/Aside';
import Search from 'components/organisms/Search/Search';

const MainTemplate = ({ children }) => {
  const location = useLocation();
  return (
    <Template>
      {location.pathname !== SIGNIN && location.pathname !== SIGNUP && <Menu />}

      {children}
    </Template>
  );
};

MainTemplate.propTypes = {};

export default MainTemplate;
