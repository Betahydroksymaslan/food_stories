import styled from 'styled-components';

export const StyledIngredientItem = styled.li`
  display: inline-grid;
  width: 100%;
  grid-template-columns: ${({isEditOn}) => isEditOn ? '85px 1fr max-content' : '58px 1fr max-content'} ;
  grid-template-rows: 35px;
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
    font-size: ${({ theme }) => theme.fontSize.xs};
    transform: ${({ isTooltipOpen }) =>
      isTooltipOpen ? 'translateY(-180%)' : 'translateY(0)'};
  }
`;

export const IngredientQuantity = styled.span`
  justify-self: end;
  font-weight: 300;

  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;

export const IngredientImageWrapper = styled.div`
  width: ${({isEditOn}) => isEditOn ? '80px' : '38px'};
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  img {
    width: 28px;
    height: 28px;
  }

  ${({ theme }) => theme.media.desktop} {
    width: 70px;
    height: 70px;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;

export const DeleteIcon = styled.span`
  font-size: 30px;
  width: 28px;
  height: 28px;
  border-radius: 100%;
  display: grid;
  place-items: center;
  line-height: 0.8;
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.media.desktop} {
    width: 24px;
    height: 24px;
    line-height: 0.83;

    &:hover {
      background: #b54f4a;
    }
  }
`;

export const EditIcon = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 100%;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.colors.warning};
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;

  ${({ theme }) => theme.media.desktop} {
    width: 24px;
    height: 24px;
    line-height: 0.83;

    &:hover {
      background: #b54f4a;
    }
  }
`
