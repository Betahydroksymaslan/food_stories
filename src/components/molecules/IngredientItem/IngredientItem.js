import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledIngredientItem,
  IngredientImageWrapper,
  IngredeintName,
  IngredientQuantity,
  DeleteIcon,
} from './IngredientItem.style';
import { motion, AnimatePresence } from 'framer-motion';

const IngredientItem = ({
  modeTemp,
  deleteTemp,
  data: {
    ingredientName,
    ingredientImagePath,
    ingredientQuantity,
    ingredientUnit,
    ingredientNameExtended,
  },
}) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const toggleTooltip = () => {
    setIsTooltipOpen((prevState) => !prevState);
  };

  const deleteTemps = (e) => {
    const targetName = e.target.dataset.name;
    deleteTemp(targetName);
  };
  return (
    <StyledIngredientItem
      as={motion.li}
      layout
      key={ingredientName}
      onClick={toggleTooltip}
    >
      <IngredientImageWrapper>
        <AnimatePresence>
          {modeTemp ? (
            <DeleteIcon
              initial={{ x: -20, rotate: '45deg' }}
              animate={{ x: 0, rotate: '45deg' }}
              exit={{ x: 20 }}
              as={motion.span}
              onClick={deleteTemps}
              data-name={`${ingredientName}`}
            >
              +
            </DeleteIcon>
          ) : (
            <img src={ingredientImagePath} />
          )}
        </AnimatePresence>
      </IngredientImageWrapper>

      <IngredeintName isTooltipOpen={isTooltipOpen}>
        {ingredientName}
      </IngredeintName>
      <IngredeintName isTooltipOpen={isTooltipOpen} isToolTip={true}>
        {ingredientNameExtended ? ingredientNameExtended : 'Brak szczegółów'}
      </IngredeintName>

      <IngredientQuantity>{`${ingredientQuantity} ${ingredientUnit}`}</IngredientQuantity>
    </StyledIngredientItem>
  );
};

IngredientItem.propTypes = {};

export default IngredientItem;
