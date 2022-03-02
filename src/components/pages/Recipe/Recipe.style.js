import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  position: relative;
  background: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    grid-column: 2;
    grid-row: 1/-1;
    height: 100%;
    padding: 0;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    padding: 20px;
    column-gap: 50px;
  }
`;

// !!!!!!!!!!!!!!!!!!!!!! HEADER WITH PHOTO AND TITLE BOX !!!!!!!!!!!!!!!!!!!!!!

export const StyledHeader = styled.h1`
  text-align: center;
  font-weight: 400;

  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const MainImageWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 250px;
  margin-bottom: 70px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ theme }) => theme.media.desktop} {
    margin-bottom: 20px;
    height: 500px;
  }
`;

export const TittleWrapper = styled.header`
  width: 85%;
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
  background: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.media.desktop} {
    position: static;
    transform: translateX(0);

    width: 100%;
    border-radius: 0;
    box-shadow: none;
    background: transparent;
  }
`;

export const MealName = styled.div`
  background: ${({ theme }) => theme.colors.mainYellow};
  width: 100%;
  padding: 20px 0;
  display: grid;
  place-items: center;

  span {
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    text-align: center;
  }

  ${({ theme }) => theme.media.desktop} {
    background: transparent;
    padding: 0;

    span {
      color: ${({ theme }) => theme.colors.mainDark};
      font-size: 60px;
      text-align: start;
    }
  }
`;

export const TittleProperties = styled.div`
    width: 100%;
    height: 50px;
    background-color: color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: space-evenly;

    div {
        display: flex;
        align-items: center;
        font-weight: 500;

        svg {
            width: 25px;
            margin-right: 10px;
        }
    }

    ${({ theme }) => theme.media.desktop} {
      
      align-self: center;
  }
`;

export const ShortInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-left: 7%;
  gap: 15px;
  margin-bottom: 10px;

  ${({ theme }) => theme.media.desktop} {
  }
`;

// !!!!!!!!!!!!!!!!!!!!!! MACROS !!!!!!!!!!!!!!!!!!!!!!

export const MacroWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0 30px 0;

  ${({ theme }) => theme.media.desktop} {
    margin: 0;
  }
`;

export const MacroBox = styled.div`
  width: 28%;
  box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
  border-radius: 15px;
  display: flex;
  background: ${({ indexNumber }) => {
    if (indexNumber === 0) return '#f3f7fa';
    if (indexNumber === 1) return '#f1fadd';
    if (indexNumber === 2) return '#fdf1e7';
    return '#ffffff';
  }};
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;
export const MacroName = styled.span`
  font-size: 17px;
  font-weight: ${({ isBold }) => (isBold ? '500' : '300')};
`;

// !!!!!!!!!!!!!!!!!!!!!! INGREDIENTS !!!!!!!!!!!!!!!!!!!!!!

export const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 40px;

  ${({ theme }) => theme.media.desktop} {
  }
`;

// !!!!!!!!!!!!!!!!!!!!!! PREPARING !!!!!!!!!!!!!!!!!!!!!!

export const RecipeWrapper = styled.div`
  width: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;

  ${({ theme }) => theme.media.desktop} {
    padding: 0;
    gap: 10px;
  }
`;

const borderStyle = `2px dashed #008d6d`;

export const StepWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    width: 90%;
    position: relative;
    padding: 15px;
    align-self: center;

    &::before,
    &::after {
      content: '';
      width: 40px;
      height: 40px;
      position: absolute;
    }

    &::before {
      top: 0;
      left: 0;
      border-top: ${borderStyle};
      border-left: ${borderStyle};
    }

    &::after {
      bottom: 0;
      right: 0;
      border-bottom: ${borderStyle};
      border-right: ${borderStyle};
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StepName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  text-decoration: underline 2px wavy ${({ theme }) => theme.colors.darkYellow};

  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
export const StepBody = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 15px 10px;

  &::first-letter {
    font-size: 40px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkYellow};
    float: left;
    margin: 0 5px;
  }

  ${({ theme }) => theme.media.desktop} {
    margin: 15px 0;
    font-size: ${({ theme }) => theme.fontSize.xs};

    &::first-letter {
      font-size: 30px;
    }
  }
`;

// !!!!!!!!!!!!!!!!!!!!!! IMAGES !!!!!!!!!!!!!!!!!!!!!!

export const ImageWrapper = styled.div`
  width: 100%;
  margin: 0 0 30px 0;

  img {
    width: 100%;
  }

  ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;

export const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  margin-top: 50px;
  padding: 0 15px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.mainYellow};
  }

  &::before {
    top: -45px;
    right: 40%;
  }
  &::after {
    top: -45px;
    left: 40%;
  }

  img {
    width: 100%;
  }

  ${({ theme }) => theme.media.desktop} {
  }
`;
