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
  IngredientItem,
  IngredientImageWrapper,
  StyledHeader,
  IngredeintName,
  IngredientQuantity,
  StepName,
  RecipeWrapper,
  StepWrapper,
  StepBody,
  ImageWrapper,
} from './Recipe.style';
import { db } from 'assets/firebase/firebase';
import Loader from 'components/atoms/Loader/Loader';
import { ReactComponent as TimeIcon } from 'assets/icons/clockIcon.svg';
import { ReactComponent as CookHatIcon } from 'assets/icons/cookHatIcon.svg';
import { ReactComponent as StarIcon } from 'assets/icons/starIcon.svg';
import Back from 'components/atoms/Back/Back';
import DisplayOptions from 'components/molecules/DisplayOptions/DisplayOptions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addDatabase } from 'actions/databaseActions';

const Recipe = (props) => {
  const { recipeName } = useParams();
  const [meal, setMeal] = useState([]);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);

  useEffect(() => {
    const ref = db.ref(`meals/${recipeName}`);
    db.ref(ref).on('value', (snapshot) => {
      const data = snapshot.val();
      setMeal(data);
    });
  }, []);

  const renderIngredients = meal?.ingredients?.map((item) => (
    <IngredientItem key={item.ingredientName}>
      <IngredientImageWrapper>
        <img src={item.ingredientImagePath} />
      </IngredientImageWrapper>
      <IngredeintName>{item.ingredientName}</IngredeintName>
      <IngredientQuantity>{`${item.ingredientQuantity} ${item.ingredientUnit}`}</IngredientQuantity>
    </IngredientItem>
  ));

  const renderRecipe = meal?.recipe?.map((item) => (
    <StepWrapper key={item.stepName}>
      <StepName>{item.stepName}</StepName>
      <StepBody>{item.stepBody}</StepBody>
    </StepWrapper>
  ));

  const addToFastList = async () => {
    const ref = `users/${auth.uid}/fastList/${recipeName}`;
    const object = { name: recipeName, imagePath: meal?.mainImage };
    const message = 'Dodano zakładkę!';

    dispatch(addDatabase(ref, object, message));
  };

  const addToFastFavourite = async () => {
    const ref = `users/${auth.uid}/favourite/${recipeName}`;
    const object = { name: recipeName, imagePath: meal?.mainImage };
    const message = 'Dodano do ulubionych!';

    dispatch(addDatabase(ref, object, message));
  };

  const options = [
    { name: 'Dodaj zakładkę', optionFunction: addToFastList },
    { name: 'Dodaj do ulubionych', optionFunction: addToFastFavourite },
  ];

  console.log(meal);
  return meal ? (
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
              4.3
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

      <StyledHeader>Składniki</StyledHeader>
      <IngredientsList>{renderIngredients}</IngredientsList>

      <ImageWrapper>
        <img src={meal.secondImage} alt="secondImage" />
      </ImageWrapper>

      <StyledHeader>Przygotowanie</StyledHeader>
      <RecipeWrapper>{renderRecipe}</RecipeWrapper>
    </Wrapper>
  ) : (
    <Loader />
  );
};

Recipe.propTypes = {};

export default Recipe;
