import React, { useState, useEffect, useRef } from 'react';
import { db } from 'assets/firebase/firebase';
import PropTypes from 'prop-types';
import {
  AddMealWrapper,
  StyledForm,
  IngredientBox,
  InlineWrapper,
  AddPhotoButton,
  ImagesWrapper,
  AddRemoveButton,
  LoaderWrapper,
  ProgressBar,
  IngredientAndRecipesWrapper,
  InlineWrapperForButtons,
} from './AddMeal.style';
import Close from 'components/atoms/Close/Close';
import FormField from 'components/molecules/FormField/FormField';
import { useForm, Controller } from 'react-hook-form';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Select from 'components/atoms/Select/Select';
import { v4 as randomid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addNewMealDatabase } from 'actions/databaseActions';
import Loader from 'components/atoms/Loader/Loader';
import { useMedia } from 'hooks/useMedia';

const AddMeal = ({ closeModal }) => {
  const [dbIngredients, setDbIngredients] = useState([]);
  const initialIngredientsState = { id: randomid() };
  const initialRecipesState = { id: randomid() };
  const [ingredients, setIngredients] = useState([initialIngredientsState]);
  const [recipes, setRecipes] = useState([initialRecipesState]);
  const [foodCategories, setFoodcategories] = useState([]);
  const [proggressBar, setProggressBar] = useState(0);

  const media = useMedia('(min-width: 600px)');

  const difficultyOptions = [
    { value: 'łatwy', label: 'łatwy' },
    { value: 'średni', label: 'średni' },
    { value: 'trudny', label: 'trudny' },
  ];

  const dispatch = useDispatch();
  const apiCallProgress = useSelector(
    (state) => state.apiCallsReducer.apiCallProgress
  );
  console.log(dbIngredients);
  const addNewIngredient = () =>
    setIngredients([...ingredients, initialIngredientsState]);
  const addNewRecipe = () => setRecipes([...recipes, initialRecipesState]);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const deleteLastIngredientElement = () => {
    const newArray = ingredients.slice(0, -1);
    setIngredients(newArray);
  };

  const deleteLastRecipeElement = () => {
    const newArray = recipes.slice(0, -1);
    setRecipes(newArray);
  };

  const renderIngredients = ingredients.map((item, index) => {
    const currentTypeValue = watch(`ingredients[${index}].type`);
    const defaultUnitOption = [{ value: '-', label: '-' }];
    const renderOptions = dbIngredients.filter(
      (item) => item.value === currentTypeValue
    );

    return (
      <IngredientBox key={item.id} id={item.id}>
        <FormField
          id={item.id}
          name={item.id}
          label={`nazwa składnika nr ${index + 1}`}
          placeholder="nazwij skdnik"
          {...register(`ingredients[${index}].name`, {
            required: 'podaj nazwę składnika!',
          })}
        />
        {errors.ingredients && errors.ingredients[index]?.name && (
          <ErrorMessage>{errors.ingredients[index].name.message}</ErrorMessage>
        )}

        <Controller
          control={control}
          rules={{ required: 'Wybierz typ produktu!' }}
          name={`ingredients[${index}].type`}
          render={({ field: { onChange, value, ref, name } }) => (
            <Select
              inputRef={ref}
              id="select"
              label="wybierz typ"
              onChange={onChange}
              value={value}
              optionsValue={dbIngredients}
              name={name}
            />
          )}
        />
        {errors.ingredients && errors.ingredients[index]?.type && (
          <ErrorMessage>{errors.ingredients[index].type.message}</ErrorMessage>
        )}

        <InlineWrapper>
          <FormField
            small
            {...register(`ingredients[${index}].quantity`, {
              required: 'podaj ilość i jednostkę wagi!',
            })}
            type="number"
            name={`ingredients[${index}].quantity`}
            id={`ingredients[${index}].quantity`}
            placeholder="ilość"
          />
          <Controller
            control={control}
            name={`ingredients[${index}].unit`}
            rules={{ required: 'podaj ilość i jednostkę wagi!' }}
            render={({ field: { onChange, value, ref, name } }) => (
              <Select
                inputRef={ref}
                id="select"
                inputSize="small"
                onChange={onChange}
                value={value}
                optionsValue={
                  currentTypeValue
                    ? renderOptions[0].unitsData
                    : defaultUnitOption
                }
                name={name}
              />
            )}
          />
        </InlineWrapper>
        {errors.ingredients &&
          (errors.ingredients[index]?.quantity ||
            errors.ingredients[index]?.unit) && (
            <ErrorMessage>
              {errors.ingredients[index].quantity?.message
                ? errors.ingredients[index].quantity?.message
                : errors.ingredients[index].unit?.message}
            </ErrorMessage>
          )}
      </IngredientBox>
    );
  });

  const mainImageRef = useRef(null);
  const secondImageRef = useRef(null);
  const restImagesRef = useRef(null);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'images.mainImage' && value.images.mainImage[0]) {
        mainImageRef.current.setAttribute(
          'src',
          URL.createObjectURL(value.images.mainImage[0])
        );
      }
      if (name === 'images.secondImage' && value.images.secondImage[0]) {
        secondImageRef.current.setAttribute(
          'src',
          URL.createObjectURL(value.images.secondImage[0])
        );
      }
      if (name === 'images.restImages' && value.images.restImages[0]) {
        restImagesRef.current.setAttribute(
          'src',
          URL.createObjectURL(value.images.restImages[0])
        );
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, mainImageRef, secondImageRef, restImagesRef]);

  /*const renderRestImages = restImagesList.map((item, index) => (
    <ImagePreview key={index}>
      <img />
    </ImagePreview>
  ));*/

  const renderRecipes = recipes.map((item, index) => (
    <IngredientBox key={item.id}>
      <FormField
        id={item.id}
        name={item.id}
        defaultValue={`krok ${index + 1}`}
        label={`nazwa punktu`}
        placeholder="nazwij punkt"
        {...register(`recipes[${index}].name`, {
          required: 'podaj nazwę punktu!',
        })}
      />
      {errors.recipes && errors.recipes[index]?.name && (
        <ErrorMessage>{errors.recipes[index].name.message}</ErrorMessage>
      )}
      <FormField
        id={`recipes[${index}].body`}
        name={`recipes[${index}].body`}
        label={`treść`}
        textareaSize
        placeholder="wpisz treść..."
        {...register(`recipes[${index}].body`, {
          required: 'podaj treść tego punktu!',
        })}
      />
      {errors.recipes && errors.recipes[index]?.body && (
        <ErrorMessage>{errors.recipes[index].body.message}</ErrorMessage>
      )}
    </IngredientBox>
  ));
  const changeProggress = (proggress) => setProggressBar(proggress);

  const onSubmit = (data) => {
    const date = new Date().toLocaleString('pl', {
      dateStyle: 'long',
    });
    const imagesArray = [
      data.images.mainImage[0],
      data.images.secondImage[0],
      ...data.images.restImages,
    ];

    const dataObject = {
      mealname: data.mealName,
      date,
      difficulty: data.difficulty,
      cookTime: Number(data.cookTime),
      ingredients: data.ingredients.map((item) => {
        return {
          ingredientName: item.name,
          ingredientQuantity: Number(item.quantity),
          ingredientType: item.type.name,
          ingredientImagePath: item.type.path,
          ingredientUnit: item.unit,
          fat: item.type.fat,
          protein: item.type.protein,
          carbs: item.type.carbs,
        };
      }),

      recipe: data.recipes.map((item) => {
        return {
          stepName: item.name,
          stepBody: item.body,
        };
      }),
      categories: data.foodCategories.map((item) => {
        return {
          categoryName: item.name,
          categoryPath: item.path,
        };
      }),
    };
    const path = `meals/${data.mealName}`;
    const message = 'Pomyślnie dodano kolejny przepis!';

    dispatch(
      addNewMealDatabase(
        path,
        dataObject,
        message,
        imagesArray,
        changeProggress,
        closeModal
      )
    );
  };
  const errorIsRequired = 'To pole jest wymagane';

  useEffect(() => {
    const ref = db.ref('/products');
    let unsubscribe;
    const watch = () => {
      unsubscribe = ref.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        let unitsData = [];
        const temporaryData = [];
        for (let id in data) {
          for (let i in data[id].units) {
            unitsData.push({
              label: data[id].units[i].name,
              value: data[id].units[i].name,
            });
          }
          temporaryData.push({
            value: {
              path: data[id].imagePath,
              name: id,
              carbs: data[id].carbs,
              fat: data[id].fat,
              protein: data[id].protein,
            },
            label: id,
            unitsData,
          });
          unitsData = [];
        }
        setDbIngredients(temporaryData);
      });
    };

    watch();
    return () => unsubscribe;
  }, []);

  useEffect(() => {
    const ref = db.ref('/mealCategories');
    let unsubscribe;
    const watch = () => {
      unsubscribe = ref.on('value', (snapshot) => {
        const data = snapshot.val();
        const temporaryData = [];
        for (let id in data) {
          temporaryData.push({
            value: { name: data[id].name, path: data[id].imagePath },
            label: data[id].name,
          });
        }
        setFoodcategories(temporaryData);
      });
    };

    watch();
    return () => unsubscribe;
  }, []);

  return (
    <>
      <AddMealWrapper>
        <Close onClick={closeModal} closePosition="top-right" />
        <Paragraph isBold size="big">
          Dodaj nowy posiłek
        </Paragraph>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FormField
            name="mealName"
            id="mealName"
            label="nazwa posiłku"
            placeholder="nazwij posiłek"
            {...register('mealName', { required: true })}
          />
          {errors.mealName && <ErrorMessage>{errorIsRequired}</ErrorMessage>}
          <Paragraph
            size={media ? 'big' : 'medium'}
            customMargin="30px 0 20px"
            isBold
          >
            Dodaj skdniki:
          </Paragraph>
          <IngredientAndRecipesWrapper>
            {renderIngredients}
            <InlineWrapperForButtons>
              <AddRemoveButton type="button" onClick={addNewIngredient} />

              <AddRemoveButton
                remove={true}
                type="button"
                onClick={deleteLastIngredientElement}
              />
            </InlineWrapperForButtons>
          </IngredientAndRecipesWrapper>

          <Paragraph
            size={media ? 'big' : 'medium'}
            customMargin="30px 0 20px"
            isBold
          >
            Dodaj przepis:
          </Paragraph>
          <IngredientAndRecipesWrapper>
            {renderRecipes}
            <InlineWrapperForButtons>
              <AddRemoveButton type="button" onClick={addNewRecipe} />

              <AddRemoveButton
                remove={true}
                type="button"
                onClick={deleteLastRecipeElement}
              />
            </InlineWrapperForButtons>
          </IngredientAndRecipesWrapper>

          <Paragraph
            size={media ? 'big' : 'medium'}
            customMargin="30px 0 20px"
            isBold
          >
            Zdjęcie główne (miniatura):
          </Paragraph>
          <ImagesWrapper>
            <AddPhotoButton
              accept="image/*"
              type="file"
              {...register('images.mainImage', {
                required: 'wybierz zdjęcie główne!',
              })}
            />

            <img ref={mainImageRef} />
          </ImagesWrapper>
          {errors.images && errors.images?.mainImage && (
            <ErrorMessage>{errors.images.mainImage.message}</ErrorMessage>
          )}

          <Paragraph
            size={media ? 'big' : 'medium'}
            customMargin="30px 0 20px"
            isBold
          >
            Zdjęcie poglądowe:
          </Paragraph>
          <ImagesWrapper>
            <AddPhotoButton
              accept="image/*"
              type="file"
              {...register('images.secondImage', {
                required: 'wybierz zdjęcie poglądowe!',
              })}
            />
            <img ref={secondImageRef} />
          </ImagesWrapper>
          {errors.images && errors.images?.secondImage && (
            <ErrorMessage>{errors.images.secondImage.message}</ErrorMessage>
          )}

          <Paragraph
            size={media ? 'big' : 'medium'}
            customMargin="30px 0 20px"
            isBold
          >
            Pozostałe zdjęcia:
          </Paragraph>
          <ImagesWrapper>
            <AddPhotoButton
              accept="image/*"
              multiple={true}
              type="file"
              {...register('images.restImages', {
                required: 'wybierz przynajmniej jedno zdjęcie!',
              })}
            />
            <img ref={restImagesRef} />
          </ImagesWrapper>
          {errors.images && errors.images?.restImages && (
            <ErrorMessage>{errors.images.restImages.message}</ErrorMessage>
          )}

          <Paragraph
            size={media ? 'big' : 'medium'}
            customMargin="30px 0 20px"
            isBold
          >
            Tagi, poziom trudności, czas przygotowania:
          </Paragraph>
          <div style={{ width: '350px' }}>
            <Controller
              control={control}
              rules={{ required: 'Dopasuj !' }}
              name="foodCategories"
              render={({ field: { onChange, value, ref, name } }) => (
                <Select
                  inputRef={ref}
                  id="select"
                  label="wybierz kategorie"
                  isMulti
                  onChange={onChange}
                  value={value}
                  optionsValue={foodCategories}
                  name={name}
                />
              )}
            />
            {errors.foodCategories && (
              <ErrorMessage>{errors.foodCategories.message}</ErrorMessage>
            )}

            <Controller
              control={control}
              rules={{ required: 'Dopasuj poziom trudności!' }}
              name="difficulty"
              render={({ field: { onChange, value, ref, name } }) => (
                <Select
                  inputRef={ref}
                  id="select"
                  label="dopasuj poziom trudności"
                  onChange={onChange}
                  value={value}
                  optionsValue={difficultyOptions}
                  name={name}
                />
              )}
            />
            {errors.difficulty && (
              <ErrorMessage>{errors.difficulty.message}</ErrorMessage>
            )}

            <FormField
              name="cookTime"
              id="cookTime"
              type="number"
              step="1"
              label="czas przygotowania (min)"
              placeholder="oszacuj czas"
              {...register('cookTime', { required: true })}
            />
            {errors.cookTime && <ErrorMessage>{errorIsRequired}</ErrorMessage>}

            <Button isBig={true} disabled={apiCallProgress === 1} type="submit">
              dodaj
            </Button>
          </div>
        </StyledForm>
      </AddMealWrapper>
      {apiCallProgress === 1 ? (
        <LoaderWrapper>
          <Loader positionStatic={true} />
          <span>trwa dodawanie przepisu...</span>
          <ProgressBar proggress={proggressBar} />
        </LoaderWrapper>
      ) : null}
    </>
  );
};

AddMeal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default AddMeal;
