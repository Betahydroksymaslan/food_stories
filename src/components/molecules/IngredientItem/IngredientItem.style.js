import styled from 'styled-components';

export const StyledIngredientItem = styled.li`
  display: inline-grid;
  width: 100%;
  grid-template-columns: 58px 1fr max-content;
  grid-template-rows: 38px;
  align-items: center;
  justify-items: start;
  padding: 0 10px;
  position: relative;
  overflow: hidden;

  ${({ theme }) => theme.media.desktop} {
    padding: 0;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.03);
    }
  }
`;

export const IngredeintName = styled.span`
  font-weight: 500;
  color: ${({ isToolTip, theme }) =>
    isToolTip ? theme.colors.mainYellow : theme.colors.mainDark};
  font-size: 18px;
  text-align: start;
  grid-column: 2/3;
  grid-row: 1;
  transition: transform 0.3s cubic-bezier(0.61, 0.07, 0.23, 0.89);

  transform: ${({ isTooltipOpen }) =>
    isTooltipOpen ? 'translateY(-165%)' : 'translateY(0)'};

  &:nth-of-type(2) {
    margin-top: 70px;
  }

  ${({ theme }) => theme.media.desktop} {
    font-weight: 400;
  }
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

  img {
    width: 28px;
    height: 28px;
  }

  ${({ theme }) => theme.media.desktop} {
    width: 34px;
    height: 34px;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;
