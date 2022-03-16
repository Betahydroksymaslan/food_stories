import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledIngredientItem,
  IngredientImageWrapper,
  IngredeintName,
  IngredientQuantity,
  DeleteIcon,
  EditIcon,
} from './IngredientItem.style';
import { motion, AnimatePresence } from 'framer-motion';

const IngredientItem = ({
  modeTemp,
  deleteTemp,
  changeQuantityTemp,
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

  const getName = (e) => {
    const targetName = e.target.dataset.name;
    changeQuantityTemp(targetName);
  };

  return (
    <StyledIngredientItem
      isEditOn={modeTemp}
      as={motion.li}
      layout
      key={ingredientName}
    >
      <IngredientImageWrapper isEditOn={modeTemp}>
        {modeTemp ? (
          <>
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

            <EditIcon
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              exit={{ x: 20 }}
              as={motion.span}
              onClick={getName}
              data-name={`${ingredientName}`}
            >
              &#9998;
            </EditIcon>
          </>
        ) : (
          <img src={ingredientImagePath} />
        )}
      </IngredientImageWrapper>

      <IngredeintName onClick={toggleTooltip} isTooltipOpen={isTooltipOpen}>
        {ingredientName}
      </IngredeintName>
      <IngredeintName
        onClick={toggleTooltip}
        isTooltipOpen={isTooltipOpen}
        isToolTip={true}
      >
        {ingredientNameExtended ? ingredientNameExtended : 'Brak szczegółów'}
      </IngredeintName>

      <IngredientQuantity>{`${ingredientQuantity} ${ingredientUnit}`}</IngredientQuantity>
    </StyledIngredientItem>
  );
};

IngredientItem.propTypes = {};

export default IngredientItem;
