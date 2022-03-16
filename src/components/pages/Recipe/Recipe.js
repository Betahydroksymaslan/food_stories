import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import {
  Wrapper,
  MainImageWrapper,
  TittleWrapper,
  MealName,
  TittleProperties,
  IngredientsList,
  StyledHeader,
  StepName,
  RecipeWrapper,
  StepWrapper,
  StepBody,
  ImageWrapper,
  MacroWrapper,
  ShortInfoWrapper,
  ImagesContainer,
  FirstCell,
  SecondCell,
  LastCell,
  TipsWrapper,
  Tip,
  AddMoreIngredients,
  EditQuantityWrapper,
  InlineWrapper,
  EndEditionButton,
  VariantsWrapper,
  VariantItem,
  VariantIcon,
} from './Recipe.style';
import { db } from 'assets/firebase/firebase';
import { ReactComponent as TimeIcon } from 'assets/icons/clockIcon.svg';
import { ReactComponent as CookHatIcon } from 'assets/icons/cookHatIcon.svg';
import { ReactComponent as StarIcon } from 'assets/icons/starIcon.svg';
import { ReactComponent as CookHatIconBlack } from 'assets/icons/cookHatIconBlack.svg';
import Back from 'components/atoms/Back/Back';
import DisplayOptions from 'components/molecules/DisplayOptions/DisplayOptions';
import { useDispatch, useSelector } from 'react-redux';
import {
  addDatabase,
  removeDatabase,
  pushDatabase,
} from 'actions/databaseActions';
import RecipeShortInfo from 'components/molecules/RecipeShortInfo/RecipeShortInfo';
import { ReactComponent as PortionIcon } from 'assets/icons/portionIcon.svg';
import { ReactComponent as CaloriesIcon } from 'assets/icons/caloriesIcon.svg';
import { ReactComponent as ClockIconBalck } from 'assets/icons/clockIconBlack.svg';
import RatingStars from 'components/organisms/RatingStars/RatingStars';
import { handleRatingStats } from 'helpers/mathOperations';
import IngredientItem from 'components/molecules/IngredientItem/IngredientItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useMedia } from 'hooks/useMedia';
import { HOME } from 'constants/routes';
import ConfirmDecision from 'components/organisms/ConfirmDecision/ConfirmDecision';
import Modal from 'components/organisms/Modal/Modal';
import FindIngredient from 'components/organisms/FindIngredient/FindIngredient';
import MacroBox from 'components/organisms/MacroBox/MacroBox';
import Edit from 'components/atoms/Edit/Edit';
import SocialShare from 'components/molecules/SocialShare/SocialShare';
import RatingPrompt from 'components/organisms/RatingPrompt/RatingPrompt';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import FormField from 'components/molecules/FormField/FormField';
import AddNewMealVariant from 'components/organisms/AddNewMealVariant/AddNewMealVariant';

const Recipe = (props) => {
  const { recipeName } = useParams();
  const [meal, setMeal] = useState([]);
  const [rating, setRating] = useState(0);
  const media = useMedia('(min-width: 600px)');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);
  const history = useHistory();
  const ratingStats = handleRatingStats(meal.ratings);
  const topPageRef = useRef(null);

  /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! MODALS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

  const [isConfirmBoxVisible, setIsConfirmBoxVisible] = useState(false);

  const openModal = () => setIsConfirmBoxVisible(true);
  const closeModal = () => setIsConfirmBoxVisible(false);

  const [addIngredientModal, setAddIngredientModal] = useState(false);

  const openIngredientModal = () => setAddIngredientModal(true);
  const closeIngredientModal = () => setAddIngredientModal(false);
  const addNewIngredientTemporary = (object) => setMeal(object);

  const [isRatingModalVisible, setIsRatingModalVisible] = useState(false);

  const openRatingModal = () => setIsRatingModalVisible(true);
  const closeRatingModal = () => setIsRatingModalVisible(false);

  const [isEditQuantityModalOpen, setEditQiantityModalOpen] = useState(false);
  const [editQuantityValue, setEditQuantityValue] = useState('');
  const handleEditQuantityOnChange = (e) =>
    setEditQuantityValue(e.target.value);

  const openEditQuantityModal = () => setEditQiantityModalOpen(true);
  const closeEditQuantityModal = () => setEditQiantityModalOpen(false);

  const [isAddVariantVisible, setSsAddVariantVisible] = useState(false);

  const openAddVariantModal = () => setSsAddVariantVisible(true);
  const closeAddVariantModal = () => setSsAddVariantVisible(false);

  /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! EDITING TEMP !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

  const [editModeTemp, setEditModeTemp] = useState(false);
  const editTempOn = () => setEditModeTemp(true);
  const editTempOff = () => setEditModeTemp(false);

  const deleteIngredientTemp = (target) => {
    const newIngredients = meal.ingredients.filter(
      (item) => item.ingredientName !== target
    );
    const newRealIngredients = meal.realIngredients.filter(
      (item) => item.name !== target
    );
    setMeal({
      ...meal,
      ingredients: newIngredients,
      realIngredients: newRealIngredients,
    });
  };

  const [ingredientTargetName, setIngredientTargetName] = useState('');

  const getNameAndOpenModal = (targetName) => {
    setIngredientTargetName(targetName);
    openEditQuantityModal();
  };

  const changeIngredientQuantityTemp = () => {
    if (!editModeTemp) return;

    const mealCopy = JSON.parse(JSON.stringify(meal)); // deep copy of meal object

    if (editQuantityValue) {
      for (const item of mealCopy.ingredients) {
        if (item.ingredientName === ingredientTargetName) {
          item.ingredientQuantity = Number(editQuantityValue);
        }
      }

      const realIngredients = mealCopy.ingredients.map((item) => ({
        name: item.ingredientName,
        fat: (item.ingredientQuantity * item.converter * item.fat) / 100,
        protein:
          (item.ingredientQuantity * item.converter * item.protein) / 100,
        carbs: (item.ingredientQuantity * item.converter * item.carbs) / 100,
      }));

      mealCopy.realIngredients = realIngredients;

      setMeal(mealCopy);
      setEditQuantityValue('');
      closeEditQuantityModal();
    }
  };

  const translateFoodMacro = (name) => {
    if (name === 'fat') return 'tłuszcze';
    if (name === 'protein') return 'białko';
    return 'węgle';
  };

  const countCalories = (name, value) => {
    if (name === 'białko' || name === 'węgle') return value * 4;
    return value * 9;
  };

  const countMacro = () => {
    let data = [];

    const reducedMacros = meal?.realIngredients?.reduce((acc, item) => {
      return {
        fat: acc.fat + item.fat,
        carbs: acc.carbs + item.carbs,
        protein: acc.protein + item.protein,
      };
    });

    let totalValue = 0;

    for (let id in reducedMacros) {
      totalValue += reducedMacros[id];
      data.push({
        name: translateFoodMacro(id),
        value: Number(reducedMacros[id].toFixed(1)),
      });
    }
    return data.map((item) => ({
      ...item,
      percentValue: Math.round((item.value * 100) / totalValue),
      kcal: countCalories(item.name, item.value),
    }));
  };

  const renderMakroBoxes = countMacro().map((item, index) => (
    <MacroBox
      key={item.name}
      percent={item.percentValue}
      indexNumber={index}
      macroName={item.name}
      macroValue={item.value}
    />
  ));

  const totalCalories = countMacro().reduce(
    (acc, item) => Math.round(acc + item.kcal),
    0
  );

  console.log(meal);

  /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! SHORTCUTS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

  const [shortcutsDataAsync, setShortcutsDataAsync] = useState([]);

  const shortcutsData =
    meal &&
    [
      {
        name: ratingStats.average,
        tipText: 'ocena przepisu',
        icon: <StarIcon />,
        phone: false,
      },
      {
        name: meal.portions,
        tipText: 'ilość porcji',
        icon: <PortionIcon />,
        phone: true,
      },
      {
        name: `${totalCalories} kcal`,
        tipText: 'łączna ilość kalorii',
        icon: <CaloriesIcon />,
        phone: true,
      },
      {
        name: meal.difficulty,
        tipText: 'poziom trudnosci',
        icon: <CookHatIconBlack />,
        phone: false,
      },
      {
        name: `${meal.cookTime} min`,
        tipText: 'czas przygotowania',
        icon: <ClockIconBalck />,
        phone: false,
      },
      ...shortcutsDataAsync,
    ].filter((item) => (media ? item : item.phone === true));

  useEffect(() => {
    const ref = db.ref(`meals/${recipeName}`);
    const listener = ref.on('value', (snapshot) => {
      if (!snapshot.exists()) return history.push(HOME);

      const data = snapshot.val();
      const imagesArray = [];

      if (data?.ratings?.[auth.uid]) {
        setRating(data.ratings[auth.uid].rate);
      }

      for (let id in data.images) {
        imagesArray.push(data.images[id]);
      }

      const realIngredients = data.ingredients.map((item) => ({
        name: item.ingredientName,
        fat: (item.ingredientQuantity * item.converter * item.fat) / 100,
        protein:
          (item.ingredientQuantity * item.converter * item.protein) / 100,
        carbs: (item.ingredientQuantity * item.converter * item.carbs) / 100,
      }));

      const categoriesData = data.categories.map((item) => ({
        name: item.categoryName,
        tipText: 'kategoria posiłku',
        icon: <img src={item.categoryPath} />,
        phone: true,
      }));
      setShortcutsDataAsync(categoriesData);
      setMeal({ ...data, realIngredients, imagesArray });
      setOriginalMeal({ ...data, realIngredients, imagesArray });
    });

    return () => ref.off('value', listener);
  }, [recipeName]);

  const renderShortCuts = shortcutsData.map((item, index) => (
    <RecipeShortInfo key={index} name={item.name} tipText={item.tipText}>
      {item.icon}
    </RecipeShortInfo>
  ));

  const renderIngredients = meal?.ingredients?.map((item) => (
    <AnimatePresence key={item.ingredientName}>
      <IngredientItem
        changeQuantityTemp={getNameAndOpenModal}
        deleteTemp={deleteIngredientTemp}
        modeTemp={editModeTemp}
        data={item}
      />
    </AnimatePresence>
  ));

  const renderRecipe = meal?.recipe?.map((item) => (
    <StepWrapper key={item.stepName}>
      <StepName>{item.stepName}</StepName>
      <StepBody>{item.stepBody}</StepBody>
      {item.image ? (
        <div>
          <img loading="lazy" src={item.image} />
        </div>
      ) : null}
    </StepWrapper>
  ));

  /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! OPTIONS AREA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

  const addVariant = async (name, color) => {
    const ref = `users/${auth.uid}/mealsVariants/${recipeName}`;
    const object = { ...meal, variantName: name, variantColor: color };
    const message = 'Dodano nowy wariant posiłku!';

    dispatch(pushDatabase(ref, object, message));
  };

  const addToFastList = async () => {
    const ref = `users/${auth.uid}/fastList/${recipeName}`;
    const object = { ...meal };
    const message = 'Dodano zakładkę!';

    dispatch(addDatabase(ref, object, message));
  };

  const addToFavourite = async () => {
    const ref = `users/${auth.uid}/favourite/${recipeName}`;
    const object = { ...meal };
    const message = 'Dodano do ulubionych!';

    dispatch(addDatabase(ref, object, message));
  };

  const removeRecipe = async () => {
    const ref = `meals/${recipeName}`;
    const favouriteRef = `users/${auth.uid}/favourite/${recipeName}`;
    const tabsRef = `users/${auth.uid}/fastList/${recipeName}`;
    const message = 'Usunięto przepis!';
    const goHome = () => {
      closeModal();
      history.push(HOME);
    };
    dispatch(removeDatabase(favouriteRef));
    dispatch(removeDatabase(tabsRef));
    dispatch(removeDatabase(ref, message, goHome));
  };

  const options = [
    { name: 'Dodaj zakładkę', optionFunction: addToFastList },
    { name: 'Dodaj do ulubionych', optionFunction: addToFavourite },
    { name: 'Edytuj przepis', optionFunction: addToFavourite },
    { name: 'Usuń przepis', optionFunction: openModal },
    { name: 'Dodaj wariant', optionFunction: openAddVariantModal },
  ];

  const renderRestOfImages = meal?.imagesArray?.map((item) => (
    <img key={item.name} src={item.imagePath} loading="lazy" />
  ));

  const rateMeal = (value) => {
    const ref = `meals/${recipeName}/ratings/${auth.uid}`;
    const message = 'Dodano ocenę!';
    const object = { rate: value };

    dispatch(addDatabase(ref, object, message));
  };

  const renderTips =
    meal.tips &&
    meal.tips.map((item) => (
      <Tip key={item.body}>
        <span>{item.body}</span>
      </Tip>
    ));

  const rateState = JSON.parse(localStorage.getItem('userRateModalsOn'));

  const checkIsRated = () => {
    if (rateState.ratingOn) {
      openRatingModal();
    }
  };

  const [mealVariants, setMealVariants] = useState([]);

  useEffect(() => {
    const ref = db.ref(`users/${auth.uid}/mealsVariants/${recipeName}`);

    const listener = ref.on('value', (snapshot) => {
      if (!snapshot.exists()) return;

      const tempData = [];
      const data = snapshot.val();

      for (let id in data) {
        tempData.push({ ...data[id], id });
      }
      setMealVariants(tempData);
    });

    return () => ref.off('value', listener);
  }, [recipeName]);

  const [originalMeal, setOriginalMeal] = useState({});
  const mealVariantsList = [
    {
      ...originalMeal,
      variantName: 'Oryginalny przepis',
      variantColor: '#ffe795',
    },
    ...mealVariants,
  ];

  const removeVariant = (id) => {
    const ref = `users/${auth.uid}/mealsVariants/${recipeName}/${id}`;
    const message = 'usunięto wariant';

    dispatch(removeDatabase(ref, message));
  };

  const chooseVariant = (item) => {
    setMeal(item);
    topPageRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const renderVariants = mealVariantsList.map((item, index) => (
    <VariantItem key={index} onClick={() => chooseVariant(item)}>
      <VariantIcon color={item.variantColor} />
      <span>{item.variantName}</span>
      {index !== 0 && (
        <span onClick={() => removeVariant(item.id)}>&#10005;</span>
      )}
    </VariantItem>
  ));

  return media ? (
    /* !!!!!!!!!!!!!!!!!!!!!!!!!! DESKTOP LAYOUT  !!!!!!!!!!!!!!!!!!!!!!!!!!*/
    <Wrapper>
      <FirstCell>
        <DisplayOptions options={options} />
        <MainImageWrapper>
          <img src={meal.mainImage} />
        </MainImageWrapper>
        <StyledHeader>
          Składniki <Edit onClick={editTempOn} />
        </StyledHeader>

        <IngredientsList as={motion.div} layout>
          {renderIngredients}
          {editModeTemp && (
            <AddMoreIngredients onClick={openIngredientModal}>
              Dodaj kolejny składnik
            </AddMoreIngredients>
          )}
        </IngredientsList>
        <TipsWrapper>{meal.tips && renderTips}</TipsWrapper>
        <ImageWrapper>
          <img src={meal.secondImage} alt="secondImage" />
        </ImageWrapper>
      </FirstCell>

      <SecondCell>
        <TittleWrapper>
          <MealName>
            <span>{meal.mealname}</span>
          </MealName>
        </TittleWrapper>

        <ShortInfoWrapper>{meal && renderShortCuts}</ShortInfoWrapper>
        <SocialShare />
        <MacroWrapper>{meal && renderMakroBoxes}</MacroWrapper>

        <StyledHeader>Przygotowanie</StyledHeader>
        <RecipeWrapper>{renderRecipe}</RecipeWrapper>
      </SecondCell>
      <LastCell>
        <ImagesContainer>{renderRestOfImages}</ImagesContainer>

        <RatingStars
          activeStars={rating}
          rateFunction={rateMeal}
          rateName="Oceń przepis!"
        />
      </LastCell>
      <Modal isOpen={isConfirmBoxVisible} handleClose={closeModal}>
        <ConfirmDecision closeModal={closeModal} callback={removeRecipe} />
      </Modal>

      <Modal isOpen={addIngredientModal} handleClose={closeIngredientModal}>
        <FindIngredient
          meal={meal}
          closeModal={closeIngredientModal}
          callback={addNewIngredientTemporary}
        />
      </Modal>
    </Wrapper>
  ) : (
    /* !!!!!!!!!!!!!!!!!!!!!!!!!! MOBILE LAYOUT  !!!!!!!!!!!!!!!!!!!!!!!!!!*/
    <Wrapper>
      <DisplayOptions options={options} />
      <Back callback={!rating && !rateState && checkIsRated} />
      <MainImageWrapper ref={topPageRef}>
        <img src={meal.mainImage} />
        <TittleWrapper>
          <MealName>
            <span>{meal.mealname}</span>
          </MealName>
          <TittleProperties>
            <div>
              <StarIcon />
              {ratingStats.average}
            </div>
            <div>
              <TimeIcon />
              {meal.cookTime}min
            </div>
            <div>
              <CookHatIcon />
              {meal.difficulty}
            </div>
          </TittleProperties>
        </TittleWrapper>
      </MainImageWrapper>

      <ShortInfoWrapper>{meal && renderShortCuts}</ShortInfoWrapper>
      <MacroWrapper>{meal && renderMakroBoxes}</MacroWrapper>

      <StyledHeader>
        Składniki <Edit onClick={editTempOn} />
      </StyledHeader>

      <IngredientsList as={motion.div} layout>
        {renderIngredients}
        {editModeTemp && (
          <AddMoreIngredients onClick={openIngredientModal}>
            Dodaj kolejny składnik
          </AddMoreIngredients>
        )}
      </IngredientsList>

      <ImageWrapper>
        <img src={meal.secondImage} alt="secondImage" />
      </ImageWrapper>

      <StyledHeader>Przygotowanie</StyledHeader>
      <RecipeWrapper>{renderRecipe}</RecipeWrapper>

      <TipsWrapper>{meal.tips && renderTips}</TipsWrapper>

      <ImagesContainer>{renderRestOfImages}</ImagesContainer>

      <RatingStars
        activeStars={rating}
        rateFunction={rateMeal}
        rateName="Oceń przepis!"
      />

      {mealVariants.length ? (
        <VariantsWrapper>{renderVariants}</VariantsWrapper>
      ) : null}

      <SocialShare />

      <AnimatePresence>
        {editModeTemp && (
          <EndEditionButton
            onClick={editTempOff}
            type="button"
            transition={{ type: 'tween' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            initial={{ opacity: 0, y: 100, x: '-50%' }}
            exit={{ opacity: 0, y: 100, x: '-50%' }}
            as={motion.button}
          >
            &#10005; zakończ edycję
          </EndEditionButton>
        )}
      </AnimatePresence>

      <Modal isOpen={isRatingModalVisible} handleClose={closeRatingModal}>
        <RatingPrompt
          activeStars={rating}
          rateFunction={rateMeal}
          handleClose={closeRatingModal}
        />
      </Modal>

      <Modal isOpen={isConfirmBoxVisible} handleClose={closeModal}>
        <ConfirmDecision closeModal={closeModal} callback={removeRecipe} />
      </Modal>

      <Modal isOpen={addIngredientModal} handleClose={closeIngredientModal}>
        <FindIngredient
          meal={meal}
          closeModal={closeIngredientModal}
          callback={addNewIngredientTemporary}
        />
      </Modal>

      <Modal isOpen={isAddVariantVisible} handleClose={closeAddVariantModal}>
        <AddNewMealVariant
          handleClose={closeAddVariantModal}
          callback={addVariant}
        />
      </Modal>

      <Modal
        isOpen={isEditQuantityModalOpen}
        handleClose={closeEditQuantityModal}
      >
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
            <Button size="s" onClick={closeEditQuantityModal}>
              wróć
            </Button>
          </InlineWrapper>
        </EditQuantityWrapper>
      </Modal>
    </Wrapper>
  );
};

Recipe.propTypes = {};

export default Recipe;
