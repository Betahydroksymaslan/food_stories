import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/organisms/Modal/Modal';
import RatingPrompt from 'components/organisms/RatingPrompt/RatingPrompt';
import RecipeTutorial from 'components/organisms/RecipeTutorial/RecipeTutorial';
import ConfirmDecision from 'components/organisms/ConfirmDecision/ConfirmDecision';
import FindIngredient from 'components/organisms/FindIngredient/FindIngredient';
import AddNewMealVariant from 'components/organisms/AddNewMealVariant/AddNewMealVariant';
import AddNote from 'components/organisms/AddNote/AddNote';
import ChangeIngredientQuantity from 'components/organisms/ChangeIngredientQuantity/ChangeIngredientQuantity';

const RecipeModals = ({
  modalsProps: {
    changeModalsState,
    modalsState,
    ingredientTargetName,
    rating,
    rateMeal,
    removeRecipe,
    meal,
    addNewIngredientTemporary,
    addVariant,
    recipeName,
    changeIngredientQuantityTemp,
    handleEditQuantityOnChange,
    editQuantityValue,
    objectName
  },
}) => {
  return (
    <>
      <Modal
        shouldCloseOnOverlayClick={false}
        isOpen={modalsState.isTutorialVisible}
        handleClose={() => changeModalsState('isTutorialVisible', false)}
      >
        <RecipeTutorial
        objectName={objectName}
          handleClose={() => changeModalsState('isTutorialVisible', false)}
        />
      </Modal>

      <Modal
        isOpen={modalsState.isRatingModalVisible}
        handleClose={() => changeModalsState('isRatingModalVisible', false)}
      >
        <RatingPrompt
          activeStars={rating}
          rateFunction={rateMeal}
          handleClose={() => changeModalsState('isRatingModalVisible', false)}
        />
      </Modal>

      <Modal
        isOpen={modalsState.isConfirmBoxVisible}
        handleClose={() => changeModalsState('isConfirmBoxVisible', false)}
      >
        <ConfirmDecision
          closeModal={() => changeModalsState('isConfirmBoxVisible', false)}
          callback={removeRecipe}
        />
      </Modal>

      <Modal
        isOpen={modalsState.addIngredientModal}
        handleClose={() => changeModalsState('addIngredientModal', false)}
      >
        <FindIngredient
          meal={meal}
          closeModal={() => changeModalsState('addIngredientModal', false)}
          callback={addNewIngredientTemporary}
        />
      </Modal>

      <Modal
        isOpen={modalsState.isAddVariantVisible}
        handleClose={() => changeModalsState('isAddVariantVisible', false)}
      >
        <AddNewMealVariant
          handleClose={() => changeModalsState('isAddVariantVisible', false)}
          callback={addVariant}
        />
      </Modal>

      <Modal
        isOpen={modalsState.isAddNoteModalVisible}
        handleClose={() => changeModalsState('isAddNoteModalVisible', false)}
      >
        <AddNote
          handleClose={() => changeModalsState('isAddNoteModalVisible', false)}
          recipeName={recipeName}
        />
      </Modal>

      <Modal
        isOpen={modalsState.isEditQuantityModalOpen}
        handleClose={() => changeModalsState('isEditQuantityModalOpen', false)}
      >
        <ChangeIngredientQuantity
          editQuantityValue={editQuantityValue}
          handleEditQuantityOnChange={handleEditQuantityOnChange}
          changeIngredientQuantityTemp={changeIngredientQuantityTemp}
          ingredientTargetName={ingredientTargetName}
          handleClose={() =>
            changeModalsState('isEditQuantityModalOpen', false)
          }
        />
      </Modal>
    </>
  );
};

RecipeModals.propTypes = {};

export default RecipeModals;
