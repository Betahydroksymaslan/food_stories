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
    inline-size: min(100%);
    margin-inline: auto;
    grid-column: 2;
    grid-row: 1/-1;
    height: 100%;
    padding: 0;
    overflow-y: scroll;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

// !!!!!!!!!!!!!!!!!!!!!! HEADER WITH PHOTO AND TITLE BOX !!!!!!!!!!!!!!!!!!!!!!

export const StyledHeader = styled.h1`
  text-align: center;
  font-weight: 400;
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

// !!!!!!!!!!!!!!!!!!!!!! MACROS !!!!!!!!!!!!!!!!!!!!!!

export const ShortInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-left: 7%;
  gap: 15px;
  margin-bottom: 10px;
`;

export const MacroWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0 30px 0;
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
`;
export const IngredientItem = styled.li`
  display: inline-grid;
  width: 100%;
  grid-template-columns: 58px 1fr max-content;
  align-items: center;
  justify-items: start;
  padding: 0 10px;

  img {
    width: 26px;
    height: 26px;
    border-radius: 5px;
  }
`;

export const IngredeintName = styled.span`
  font-weight: 500;
  font-size: 18px;
  text-align: start;
`;

export const IngredientQuantity = styled.span`
  justify-self: end;
  font-weight: 300;
`;

export const IngredientImageWrapper = styled.div`
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
`;

// !!!!!!!!!!!!!!!!!!!!!! PREPARING !!!!!!!!!!!!!!!!!!!!!!

export const RecipeWrapper = styled.div`
  width: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
`;

export const StepWrapper = styled.div`
  width: 100%;
`;

export const StepName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  text-decoration: underline 2px wavy ${({ theme }) => theme.colors.darkYellow};
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
`;

// !!!!!!!!!!!!!!!!!!!!!! IMAGES !!!!!!!!!!!!!!!!!!!!!!

export const ImageWrapper = styled.div`
  width: 100%;
  margin: 0 0 30px 0;

  img {
    width: 100%;
  }
`;


