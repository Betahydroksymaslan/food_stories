import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  MenuWrapper,
  StyledLink,
  IconWrapper,
  ExpandIcon,
  ExpandIconBtn,
  LinkName,
} from './Menu.style';
import { SETTINGS, FAVOURITES, HOME, TABS } from 'constants/routes';
import { ReactComponent as HomeIcon } from 'assets/icons/homeIcon.svg';
import { ReactComponent as FavouriteIcon } from 'assets/icons/favouriteIcon.svg';
import { ReactComponent as UserIcon } from 'assets/icons/userIcon.svg';
import { ReactComponent as OverlapIcon } from 'assets/icons/overlapIcon.svg';
import Logout from 'components/atoms/Logout/Logout';
import { useMedia } from 'hooks/useMedia';

const Menu = (props) => {
  const media = useMedia('(min-width: 600px)');
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const routes = [
    {
      route: HOME,
      name: 'Home',
      icon: <HomeIcon />,
      isExact: true,
    },
    {
      route: TABS,
      name: 'Zakładki',
      icon: <OverlapIcon />,
      isExact: false,
    },
    {
      route: FAVOURITES,
      name: 'Ulubione',
      icon: <FavouriteIcon />,
      isExact: false,
    },
    { route: SETTINGS, name: 'Konto', icon: <UserIcon />, isExact: false },
  ];

  const renderRoutes = routes.map((route) =>
    media ? (
      <StyledLink key={route.name} exact={route.isExact} to={route.route}>
        <IconWrapper>
          {route.icon}
          <LinkName isOpen={isOpen}>{route.name}</LinkName>
        </IconWrapper>
      </StyledLink>
    ) : (
      <StyledLink
        key={route.name}
        exact={route.isExact}
        to={route.route}
        onClick={toggleMenu}
      >
        <IconWrapper>
          {route.icon}
          <LinkName isOpen={isOpen}>{route.name}</LinkName>
        </IconWrapper>
      </StyledLink>
    )
  );

  return (
    <>
      <ExpandIconBtn onClick={toggleMenu} isOpen={isOpen}>
        <ExpandIcon isOpen={isOpen} />
      </ExpandIconBtn>
      {media && <Logout />}
      <MenuWrapper isOpen={isOpen}>{renderRoutes}</MenuWrapper>
    </>
  );
};

Menu.propTypes = {};

export default Menu;
