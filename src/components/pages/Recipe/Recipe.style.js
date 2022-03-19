import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
  position: relative;
  background: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    grid-column: 2;
    grid-row: 1/-1;
    height: 100%;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 40% calc(60% - 50px);
    grid-template-row: auto auto;
    padding: 20px 20px 60px;
    column-gap: 50px;
  }
`;

/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! GRID CELLS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

export const FirstCell = styled.div`
  grid-column: 1;
  grid-row: 1;
`;

export const SecondCell = styled.div`
  grid-column: 2;
  grid-row: 1;
`;

export const LastCell = styled.div`
  grid-column: 1 / -1;
  grid-row: 2;
`;

// !!!!!!!!!!!!!!!!!!!!!! HEADER WITH PHOTO AND TITLE BOX !!!!!!!!!!!!!!!!!!!!!!

export const StyledHeader = styled.h1`
  text-align: center;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;

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
      margin: 50px 0;
      justify-self: start;
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
`;

export const ShortInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 7%;
  gap: 15px;
  margin-bottom: 10px;

  ${({ theme }) => theme.media.desktop} {
    padding: 0;
  }
`;

// !!!!!!!!!!!!!!!!!!!!!! MACROS !!!!!!!!!!!!!!!!!!!!!!

export const MacroWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0 30px 0;

  ${({ theme }) => theme.media.desktop} {
    margin: 50px 0;
  }
`;

// !!!!!!!!!!!!!!!!!!!!!! INGREDIENTS !!!!!!!!!!!!!!!!!!!!!!

export const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 40px;
`;

export const AddMoreIngredients = styled.p`
  font-size: 18px;
  width: 100%;
  font-weight: 500;
  margin: 10px 0 0;
  text-decoration: underline;
  text-align: center;

  &::before {
    content: '+';
    margin-right: 5px;
    font-weight: 600;
  }

  ${({ theme }) => theme.media.desktop} {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.xs};

    &::before {
      font-weight: 400;
    }

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.secondColor};
    }
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

const borderStyle = `5px solid`;

export const StepWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    width: 90%;
    position: relative;
    padding: 20px;
    align-self: center;

    &::after {
      content: '';
      width: 40px;
      height: 40px;
      position: absolute;
      top: 0;
      left: 0;
      border-top: ${borderStyle};
      border-left: ${borderStyle};
      border-color: ${({ theme }) => theme.colors.darkYellow};
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
    text-decoration: underline 2px ${({ theme }) => theme.colors.darkYellow};
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
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: 400;
      color: ${({ theme }) => theme.colors.mainDark};
      float: none;
      margin: 0;
    }
  }
`;

// !!!!!!!!!!!!!!!!!!!!!! TIPS !!!!!!!!!!!!!!!!!!!!!!

export const TipsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  margin: 10px 0 30px;
`;

export const Tip = styled.div`
  width: 90%;
  border-left: 6px solid ${({ theme }) => theme.colors.darkYellow};
  background: ${({ theme }) => theme.colors.lightYellow};
  display: grid;
  place-items: center;
  padding: 5px 10px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  span {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    span {
      font-size: ${({ theme }) => theme.fontSize.xs};
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
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin-bottom: 50px;

    img {
      width: 47%;
    }

    &::before {
      right: 45%;
    }
    &::after {
      left: 45%;
    }
  }
`;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!! MODALS !!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const EditQuantityWrapper = styled.div`
  width: 80vw;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.media.desktop} {
    width: max-content;
  }
`;

export const InlineWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export const EndEditionButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 50%;
  border: none;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.secondColor};
  color: ${({ theme }) => theme.colors.white};
  padding: 15px 30px;
  font-weight: 500;
  box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};

  ${({ theme }) => theme.media.desktop} {
    padding: 10px 25px;
    font-size: ${({ theme }) => theme.fontSize.xs};

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
`;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! VARIANTS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const VariantsWrapper = styled.div`
  width: 90%;
  align-self: center;
  padding: 15px 0;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.mainYellow};
  align-items: center;
  gap: 10px;
  margin: 5px 0 15px;
  position: relative;

  &::before {
    content: 'warianty';
    font-weight: 500;
    height: 20px;
    padding: 0 5px;
    background: ${({ theme }) => theme.colors.white};
    position: absolute;
    top: -10px;
    left: 10%;
  }

  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    gap: 5px;
  }
`;

export const VariantItem = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 50px auto 20px;
  padding: 5px;
  align-items: center;

  span {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  ${({ theme }) => theme.media.desktop} {
    grid-template-columns: 40px auto 20px;

    &:hover {
      background: rgba(0, 0, 0, 0.03);
      cursor: pointer;
      border-radius: 10px;
    }
  }
`;

export const VariantIcon = styled.div`
  grid-column: 1;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: ${({ color }) => color};

  ${({ theme }) => theme.media.desktop} {
    width: 25px;
    height: 25px;
  }
`;

export const VariantItemDelete = styled.span`
  ${({ theme }) => theme.media.desktop} {
    width: 20px;
    height: 20px;
    display: grid;
    place-items: center;
    border-radius: 5px;

    &:hover {
      background: ${({ theme }) => theme.colors.error};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
