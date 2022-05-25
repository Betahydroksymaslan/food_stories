import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  EditQuantityWrapper,
  InlineWrapper,
} from './ChangeIngredientQuantity.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';

const ChangeIngredientQuantity = ({
  handleClose,
  changeIngredientQuantityTemp,
  ingredientTargetName,
  handleEditQuantityOnChange,
  editQuantityValue,
}) => {
  return (
    <EditQuantityWrapper>
      <Paragraph>Podaj zmienioną ilość składnika</Paragraph>
      <Paragraph>{ingredientTargetName}</Paragraph>
      <FormField
        type="number"
        ingredientName={ingredientTargetName}
        onChange={handleEditQuantityOnChange}
        value={editQuantityValue}
        name="changeQuantity"
        small
        id="changeQuantity"
      />
      <InlineWrapper>
        <Button size="s" onClick={changeIngredientQuantityTemp}>
          edytuj
        </Button>
        <Button size="s" secondary onClick={handleClose}>
          wróć
        </Button>
      </InlineWrapper>
    </EditQuantityWrapper>
  );
};

ChangeIngredientQuantity.propTypes = {};

export default ChangeIngredientQuantity;
