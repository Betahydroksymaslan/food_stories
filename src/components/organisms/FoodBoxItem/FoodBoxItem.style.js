import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';


// !!!!!!!!!!!!!!!!!!!!!!!!! ANIMATIONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const fadeAnimation = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

// !!!!!!!!!!!!!!!!!!!!!!!!! COMPLETE COMPONENT WRAPPER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const BoxWrapper = styled(motion.div)`
  width: 300px;
  overflow: hidden;
  opacity: 1;
  display: flex;
  flex-direction: column;
  //animation: ${fadeAnimation} 0.2s 1 ease-in-out both;

  ${({ theme }) => theme.media.desktop} {
    width: calc(320px * 0.8);
    cursor: pointer;

    &:hover img {
      transform: scale(1.1);
    }
  }
`;

// !!!!!!!!!!!!!!!!!!!!!!!!! TOP PROPERTIES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const TopWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  span {
    font-weight: 600;
  }

  ${({ theme }) => theme.media.desktop} {
    height: 30px;
    font-size: 14px;
    span {
      font-weight: 500;
    }
  }
`;

// !!!!!!!!!!!!!!!!!!!!!!!!! IMAGE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-size: cover;
  object-fit: cover;
  position: relative;

  ${({ theme }) => theme.media.desktop} {
    height: calc(180px * 0.8);
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.white};

  img {
    width: 100%;
    height: 100%;
    background-position: center;
    transform-origin: center;
    transition: transform 0.2s ease-in-out;
    object-fit: cover;
  }
`;


// !!!!!!!!!!!!!!!!!!!!!!!!! TITTLE PROPERTIES !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const TittlePropertiesWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content max-content;
  row-gap: 3px;

  p {
    grid-row: 2;
    grid-column: 1 / 2;
    font-weight: 300;
    font-size: 15px;
    margin: 0;
    align-self: center;
  }

  ${({ theme }) => theme.media.desktop} {
    p {
      font-size: ${({ theme }) => theme.fontSize.xxs};
    }
  }
`;

export const FoodTittle = styled.span`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xs};

  font-weight: 700;
  grid-row: 1;
  grid-column: 1 / -1;

  ${({ theme }) => theme.media.desktop} {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;

export const RateWrapper = styled.div`
  grid-row: 2;
  grid-column: 2 / -1;
  display: flex;
  align-items: center;
  justify-self: end;

  span {
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: 15px;
  }

  svg {
    width: 18px;
    margin: 0 2px;
  }

  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xxs};

    span {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }

    svg {
      width: 15px;
    }
  }
`;
