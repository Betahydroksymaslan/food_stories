import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper,Text } from './SocialShare.style';
import { useLocation } from 'react-router-dom';
import {
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookMessengerIcon,
  ViberShareButton,
  ViberIcon,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

const SocialShare = (props) => {
  const location = useLocation();
  const link = `https://betahydroksymaslan.github.io${location.pathname}`;

  const iconSize = 25;
  
  return (
    <Wrapper>
    <Text>Udostępnij:</Text>
      <FacebookMessengerShareButton appId="2747132668915740" url={link}>
        <FacebookMessengerIcon round={true} size={iconSize} />
      </FacebookMessengerShareButton>

      <FacebookShareButton url={link}>
        <FacebookIcon round={true} size={iconSize} />
      </FacebookShareButton>

      <WhatsappShareButton url={link}>
        <WhatsappIcon round={true} size={iconSize} />
      </WhatsappShareButton>

      <ViberShareButton url={link}>
        <ViberIcon round={true} size={iconSize} />
      </ViberShareButton>
    </Wrapper>
  );
};

SocialShare.propTypes = {};

export default SocialShare;
