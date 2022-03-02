import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledIngredientItem,
  IngredientImageWrapper,
  IngredeintName,
  IngredientQuantity,
} from './IngredientItem.style';

const IngredientItem = ({
  data: {
    ingredientName,
    ingredientImagePath,
    ingredientQuantity,
    ingredientUnit,
  },
}) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const toggleTooltip = () => setIsTooltipOpen((prevState) => !prevState);
  return (
    <StyledIngredientItem key={ingredientName} onClick={toggleTooltip}>
      <IngredientImageWrapper>
        <img src={ingredientImagePath} />
      </IngredientImageWrapper>

      <IngredeintName isTooltipOpen={isTooltipOpen}>{ingredientName}</IngredeintName>
      <IngredeintName isTooltipOpen={isTooltipOpen} isToolTip={true} >Jajka na tardo mlekovita</IngredeintName>

      <IngredientQuantity>{`${ingredientQuantity} ${ingredientUnit}`}</IngredientQuantity>
    </StyledIngredientItem>
  );
};

IngredientItem.propTypes = {};

export default IngredientItem;
