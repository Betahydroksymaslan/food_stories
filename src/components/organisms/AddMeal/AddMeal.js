import React, { useState, useEffect } from 'react';
import { db } from 'assets/firebase/firebase';
import PropTypes from 'prop-types';
import { AddMealWrapper, StyledForm, IngredientBox } from './AddMeal.style';
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
  const initialIngredientsState = { name: '', unit: '', id: randomid() };
  const [ingredients, setIngredients] = useState([initialIngredientsState]);
  const addNewIngredient = () =>
    setIngredients([...ingredients, initialIngredientsState]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const renderIngredients = ingredients.map((item, index) => (
    <IngredientBox key={item.id}>
      <FormField
        id={item.id}
        name={item.id}
        label={`nazwa składnika nr ${index + 1}`}
        placeholder="nazwij skdnik"
        {...register(`ingredients[${index}].name`, {
          required: 'podaj nazwę składnika!',
        })}
      />
      {errors.ingredients && errors.ingredients[index].name && (
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
      {errors.ingredients && errors.ingredients[index].type && (
        <ErrorMessage>{errors.ingredients[index].type.message}</ErrorMessage>
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
        const temporaryData = [];
        for (let id in data) {
          temporaryData.push({ value: id, label: id });
        }
        setDbIngredients(temporaryData);
      });
    };

    watch();
    return () => unsubscribe;
  }, []);
  console.log(ingredients);
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
        <span onClick={addNewIngredient}>Dodaj</span>
        <Button type="submit">dodaj</Button>
      </StyledForm>
    </AddMealWrapper>
  );
};

AddMeal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default AddMeal;
