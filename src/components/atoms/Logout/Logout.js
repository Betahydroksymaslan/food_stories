import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, IconWrapper } from './Logout.style';
import { ReactComponent as LogoutIcon } from 'assets/icons/logoutIcon.svg';
import { logout } from 'actions/authActions';
import { useDispatch } from 'react-redux';

const Logout = (props) => {
  const dispatch = useDispatch();
  return (
    <Wrapper onClick={() => dispatch(logout())}>
      <IconWrapper>
        <LogoutIcon />
      </IconWrapper>
      <span>wyloguj</span>
    </Wrapper>
  );
};

Logout.propTypes = {};

export default Logout;
