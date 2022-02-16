import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  position: relative;
  background: ${({ theme }) => theme.colors.white};

  ${({theme}) => theme.media.desktop} {
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
  margin-bottom: 80px;

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
  padding: 25px 0;
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
  margin: 5px 0;
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
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const IngredientImageWrapper = styled.div`
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.mainBGC};
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
`;
export const StepBody = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 15px 10px;
`;

// !!!!!!!!!!!!!!!!!!!!!! IMAGES !!!!!!!!!!!!!!!!!!!!!!

export const ImageWrapper = styled.div`
  width: 100%;
  margin: 0 0 30px 0;

  img {
    width: 100%;
  }
`;
