import React from 'react';
import PropTypes from 'prop-types';
import { MenuWrapper, StyledLink, IconWrapper } from './Menu.style';
import { SETTINGS } from 'constants/routes';
import { ReactComponent as HomeIcon } from 'assets/icons/homeIcon.svg';
import { ReactComponent as FavouriteIcon } from 'assets/icons/favouriteIcon.svg';
import { ReactComponent as UserIcon } from 'assets/icons/userIcon.svg';
import { ReactComponent as OverlapIcon } from 'assets/icons/overlapIcon.svg';
import Logout from 'components/atoms/Logout/Logout';
import { useMedia } from 'hooks/useMedia';

const Menu = (props) => {
  const media = useMedia('(min-width: 600px)');

  const routes = [
    {
      route: '/food_stories/',
      name: 'Home',
      icon: <HomeIcon />,
      isExact: true,
    },
    {
      route: '/food_stories/overlap',
      name: 'Zakładki',
      icon: <OverlapIcon />,
      isExact: false,
    },
    {
      route: '/food_stories/trainings',
      name: 'Ulubione',
      icon: <FavouriteIcon />,
      isExact: false,
    },
    { route: SETTINGS, name: 'Konto', icon: <UserIcon />, isExact: false },
  ];

  const renderRoutes = routes.map((route) => (
    <StyledLink key={route.name} exact={route.isExact} to={route.route}>
      <IconWrapper>{route.icon}</IconWrapper>
    </StyledLink>
  ));
  return (
    <MenuWrapper>
      {renderRoutes}
      {media && <Logout />}
    </MenuWrapper>
  );
};

Menu.propTypes = {};

export default Menu;
