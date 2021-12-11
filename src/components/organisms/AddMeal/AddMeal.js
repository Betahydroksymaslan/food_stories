import React, { useState, useEffect } from 'react';
import { db } from 'assets/firebase/firebase';
import PropTypes from 'prop-types';
import {
  AddMealWrapper,
  StyledForm,
  IngredientBox,
  InlineWrapper,
  DeleteBox,
  AddPhotoButton,
  ImagePreview,
  ImagesWrapper,
} from './AddMeal.style';
import Close from 'components/atoms/Close/Close';
import FormField from 'components/molecules/FormField/FormField';
import { useForm, Controller } from 'react-hook-form';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Select from 'components/atoms/Select/Select';
import { v4 as randomid } from 'uuid';

const AddMeal = ({ closeModal }) => {
  const [dbIngredients, setDbIngredients] = useState([]);
  const initialIngredientsState = { id: randomid() };
  const initialRecipesState = { id: randomid() };
  const [ingredients, setIngredients] = useState([initialIngredientsState]);
  const [recipes, setRecipes] = useState([initialRecipesState]);

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

  const deleteIngredientBox = (e) => {
    const newArray = ingredients.filter((item) => e.target.id !== item.id);
    setIngredients(newArray);
  };

  const renderIngredients = ingredients.map((item, index) => {
    const currentTypeValue = watch(`ingredients[${index}].type`);
    const defaultUnitOption = [{ value: '-', label: '-' }];
    const renderOptions = dbIngredients.filter(
      (item) => item.value === currentTypeValue
    );
    console.log(ingredients);
    return (
      <IngredientBox key={item.id} id={item.id}>
        <DeleteBox id={item.id} onClick={deleteIngredientBox}>
          <span id={item.id}></span>
        </DeleteBox>
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

  const mainImage = watch('images.mainImage[0]');
  const secondImage = watch('images.secondImage[0]', []);
  const restImagesList = watch('images.restImages', []);

  console.log(mainImage);
  /*const renderRestImages = restImagesList.map((item, index) => (
    <ImagePreview key={index}>
      <img src={() => URL.createObjectURL(watch(`images.restImages[${index}]`))} />
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

  const onSubmit = (data) => console.log(data);
  const errorIsRequired = 'To pole jest wymagane';

  useEffect(() => {
    const ref = db.ref('/products');
    let unsubscribe;
    const watch = () => {
      unsubscribe = ref.on('value', (snapshot) => {
        const data = snapshot.val();
        let unitsData = [];
        const temporaryData = [];
        for (let id in data) {
          for (let i in data[id].units) {
            unitsData.push({
              label: data[id].units[i].name,
              value: data[id].units[i].name,
            });
          }
          temporaryData.push({ value: id, label: id, unitsData });
          unitsData = [];
        }
        setDbIngredients(temporaryData);
      });
    };

    watch();
    return () => unsubscribe;
  }, []);

  return (
    <AddMealWrapper>
      <Close onClick={closeModal} closePosition="top-right" />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormField
          name="mealName"
          id="mealName"
          label="nazwa posiłku"
          placeholder="nazwij posiłek"
          {...register('mealName', { required: true })}
        />
        {errors.mealName && <ErrorMessage>{errorIsRequired}</ErrorMessage>}
        <Paragraph customMargin="30px 0 20px" isBold>
          Dodaj skdniki:
        </Paragraph>
        {renderIngredients}
        <Button onClick={addNewIngredient}>dodaj</Button>
        <Paragraph customMargin="30px 0 20px" isBold>
          Dodaj przepis:
        </Paragraph>
        {renderRecipes}
        <Button onClick={addNewRecipe}>dodaj</Button>

        <Paragraph customMargin="30px 0 20px" isBold>
          Zdjęcie główne (miniatura):
        </Paragraph>
        <ImagesWrapper>
          <AddPhotoButton
            type="file"
            {...register('images.mainImage', {
              required: 'wybierz zdjęcie główne!',
            })}
          />
          {mainImage && (
            <ImagePreview>
              <img src={URL.createObjectURL(watch(`images.mainImage[0]`))} />
            </ImagePreview>
          )}
        </ImagesWrapper>
        {errors.images && errors.images?.mainImage && (
          <ErrorMessage>{errors.images.mainImage.message}</ErrorMessage>
        )}

        <Paragraph customMargin="30px 0 20px" isBold>
          Zdjęcie poglądowe:
        </Paragraph>
        <ImagesWrapper>
          <AddPhotoButton
            type="file"
            {...register('images.secondImage', {
              required: 'wybierz zdjęcie poglądowe!',
            })}
          />
          {/*secondImage && (
            <ImagePreview>
              <img src={() => URL.createObjectURL(secondImage)} />
            </ImagePreview>
          )*/}
        </ImagesWrapper>
        {errors.images && errors.images?.secondImage && (
          <ErrorMessage>{errors.images.secondImage.message}</ErrorMessage>
        )}

        <Paragraph customMargin="30px 0 20px" isBold>
          Pozostałe zdjęcia:
        </Paragraph>
        <ImagesWrapper>
          <AddPhotoButton
            type="file"
            {...register('images.restImages', {
              required: 'wybierz przynajmniej jedno zdjęcie!',
            })}
          />
          {/* restImagesList && renderRestImages */}
        </ImagesWrapper>
        {errors.images && errors.images?.restImages && (
          <ErrorMessage>{errors.images.restImages.message}</ErrorMessage>
        )}

        <Button isBig={true} type="submit">
          dodaj
        </Button>
      </StyledForm>
    </AddMealWrapper>
  );
};

AddMeal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default AddMeal;
