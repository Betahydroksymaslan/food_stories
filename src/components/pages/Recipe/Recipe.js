import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
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
  MacroBox,
  MacroName,
  ShortInfoWrapper,
  ImagesContainer,
} from './Recipe.style';
import { db } from 'assets/firebase/firebase';
import Loader from 'components/atoms/Loader/Loader';
import { ReactComponent as TimeIcon } from 'assets/icons/clockIcon.svg';
import { ReactComponent as CookHatIcon } from 'assets/icons/cookHatIcon.svg';
import { ReactComponent as StarIcon } from 'assets/icons/starIcon.svg';
import Back from 'components/atoms/Back/Back';
import DisplayOptions from 'components/molecules/DisplayOptions/DisplayOptions';
import { useDispatch, useSelector } from 'react-redux';
import { addDatabase } from 'actions/databaseActions';
import CircularProgressBar from 'components/molecules/CircularProgressBar/CircularProgressBar';
import RecipeShortInfo from 'components/molecules/RecipeShortInfo/RecipeShortInfo';
import { ReactComponent as PortionIcon } from 'assets/icons/portionIcon.svg';
import { ReactComponent as CaloriesIcon } from 'assets/icons/caloriesIcon.svg';
import RatingStars from 'components/organisms/RatingStars/RatingStars';
import { handleRatingStats } from 'helpers/mathOperations';
import IngredientItem from 'components/molecules/IngredientItem/IngredientItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useMedia } from 'hooks/useMedia';

const Recipe = (props) => {
  const { recipeName } = useParams();
  const [meal, setMeal] = useState([]);
  const [rating, setRating] = useState(0);
  const media = useMedia('(min-width: 600px)');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);

  console.log(meal);
  useEffect(() => {
    const ref = db.ref(`meals/${recipeName}`);
    const listener = ref.on('value', (snapshot) => {
      const data = snapshot.val();
      const imagesArray = [];

      if (data?.ratings?.[auth.uid]) {
        setRating(data.ratings[auth.uid].rate);
      }

      for (let id in data.images) {
        imagesArray.push(data.images[id]);
      }

      const realIngredients = data.ingredients.map((item) => ({
        fat: (item.ingredientQuantity * item.converter * item.fat) / 100,
        protein:
          (item.ingredientQuantity * item.converter * item.protein) / 100,
        carbs: (item.ingredientQuantity * item.converter * item.carbs) / 100,
      }));

      setMeal({ ...data, realIngredients, imagesArray });
      if (meal.length) {
      }
    });

    return () => ref.off('value', listener);
  }, [recipeName]);

  const renderIngredients = meal?.ingredients?.map((item) => (
    <IngredientItem key={item.ingredientName} data={item} />
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

  const options = [
    { name: 'Dodaj zakładkę', optionFunction: addToFastList },
    { name: 'Dodaj do ulubionych', optionFunction: addToFavourite },
  ];

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
    <MacroBox key={item.name} indexNumber={index}>
      <MacroName>{item.name}</MacroName>
      <MacroName isBold={true}>{item.value}g</MacroName>
      <CircularProgressBar
        indexNumber={index}
        percent={item.percentValue}
      ></CircularProgressBar>
    </MacroBox>
  ));

  const totalCalories = countMacro().reduce(
    (acc, item) => Math.round(acc + item.kcal),
    0
  );

  const renderRestOfImages = meal?.imagesArray?.map((item) => (
    <img key={item.name} src={item.imagePath} loading="lazy" />
  ));

  const rateMeal = (value) => {
    const ref = `meals/${recipeName}/ratings/${auth.uid}`;
    const message = 'Dodano ocenę!';
    const object = { rate: value };

    dispatch(addDatabase(ref, object, message));
  };

  const ratingStats = handleRatingStats(meal.ratings);

  return media ? (
    <Wrapper>
      <div>
        <MainImageWrapper>
          <img src={meal.mainImage} />
        </MainImageWrapper>
        <StyledHeader>Składniki</StyledHeader>
        <IngredientsList>{renderIngredients}</IngredientsList>
      </div>

      <div>
        <TittleWrapper>
          <MealName>
            <span>{meal.mealname}</span>
          </MealName>
        </TittleWrapper>
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
        <ShortInfoWrapper>
          <RecipeShortInfo name={meal.portions} tipText="ilość porcji">
            <PortionIcon />
          </RecipeShortInfo>
          <RecipeShortInfo
            name={`${totalCalories} kcal`}
            tipText="łączna ilość kalorii"
          >
            <CaloriesIcon />
          </RecipeShortInfo>
        </ShortInfoWrapper>
        <MacroWrapper>{meal && renderMakroBoxes}</MacroWrapper>

        <ImageWrapper>
          <img src={meal.secondImage} alt="secondImage" />
        </ImageWrapper>

        <StyledHeader>Przygotowanie</StyledHeader>
        <RecipeWrapper>{renderRecipe}</RecipeWrapper>

        <ImagesContainer>{renderRestOfImages}</ImagesContainer>

        <RatingStars
          activeStars={rating}
          rateFunction={rateMeal}
          rateName="Oceń przepis!"
        />
      </div>
    </Wrapper>
  ) : (
    <Wrapper>
      <DisplayOptions options={options} />
      <Back />
      <MainImageWrapper>
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
      <ShortInfoWrapper>
        <RecipeShortInfo name={meal.portions} tipText="ilość porcji">
          <PortionIcon />
        </RecipeShortInfo>
        <RecipeShortInfo
          name={`${totalCalories} kcal`}
          tipText="łączna ilość kalorii"
        >
          <CaloriesIcon />
        </RecipeShortInfo>
      </ShortInfoWrapper>
      <MacroWrapper>{meal && renderMakroBoxes}</MacroWrapper>

      <StyledHeader>Składniki</StyledHeader>
      <IngredientsList>{renderIngredients}</IngredientsList>

      <ImageWrapper>
        <img src={meal.secondImage} alt="secondImage" />
      </ImageWrapper>

      <StyledHeader>Przygotowanie</StyledHeader>
      <RecipeWrapper>{renderRecipe}</RecipeWrapper>

      <ImagesContainer>{renderRestOfImages}</ImagesContainer>

      <RatingStars
        activeStars={rating}
        rateFunction={rateMeal}
        rateName="Oceń przepis!"
      />
    </Wrapper>
  );
};

Recipe.propTypes = {};

export default Recipe;
