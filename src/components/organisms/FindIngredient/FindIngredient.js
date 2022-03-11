import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  InlineWrapper,
  StyledForm,
  ProductName,
  MacroBoxesWrapper,
  ProductQuant,
  PlaceholderWrapper,
} from './FindIngredient.style';
import Select from 'components/atoms/Select/Select';
import { useForm, Controller } from 'react-hook-form';
import { db } from 'assets/firebase/firebase';
import FormField from 'components/molecules/FormField/FormField';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { useMedia } from 'hooks/useMedia';
import Button from 'components/atoms/Button/Button';
import MacroBox from 'components/organisms/MacroBox/MacroBox';
import { ReactComponent as ProductPlaceholder } from 'assets/icons/macroPlaceholder.svg';

const FindIngredient = ({ closeModal, callback, meal }) => {
  const media = useMedia('(min-width: 800px)');
  const [products, setProducts] = useState([]);
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const currentTypeValue = watch('ingredientType');
  const quantityValue = watch('ingredientQuantity');
  const unitValue = watch('ingredientUnit');
  const renderOptions = products.filter(
    (item) => item.value === currentTypeValue
  );
  const defaultUnitOption = [{ value: '-', label: '-' }];

  useEffect(() => {
    const ref = db.ref('/products');

    const listener = ref.on('value', (snapshot) => {
      const data = snapshot.val();

      let unitsData = [];
      const temporaryData = [];
      for (let id in data) {
        for (let i in data[id].units) {
          unitsData.push({
            label: data[id].units[i].name,
            value: {
              name: data[id].units[i].name,
              converter: data[id].units[i].value,
            },
          });
        }
        temporaryData.push({
          value: {
            path: data[id].imagePath,
            nameExtended: data[id]?.nameExtended,
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

      setProducts(temporaryData);
    });

    return () => ref.off('value', listener);
  }, []);

  const [choosenProduct, setChoosenProduct] = useState(null);

  useEffect(() => {
    if (!currentTypeValue || !quantityValue || !unitValue) return;

    const { protein, fat, carbs, name, path } = currentTypeValue;
    const { name: unitName, converter } = unitValue;

    const countCurrentValue = (macro) =>
      Number(((macro * quantityValue * converter) / 100).toFixed(1));

    const proteinValue = countCurrentValue(protein);
    const carbsValue = countCurrentValue(carbs);
    const fatValue = countCurrentValue(fat);

    const countCalories = () =>
      Math.round(
        countCurrentValue(protein) * 4 +
          countCurrentValue(carbs) * 4 +
          countCurrentValue(fat) * 9
      );

    const countPercentValue = (macro, converter) =>
      Math.round((macro * converter * 100) / countCalories());

    setChoosenProduct({
      name,
      unitName,
      path,
      quantityValue,
      converter,
      protein: proteinValue,
      carbs: carbsValue,
      fat: fatValue,
      calories: countCalories(),
      percentage: [
        {
          name: 'białko',
          currentValue: proteinValue,
          value: countPercentValue(proteinValue, 4),
        },
        {
          name: 'węgle',
          currentValue: carbsValue,
          value: countPercentValue(carbsValue, 4),
        },
        {
          name: 'tłuszcze',
          currentValue: fatValue,
          value: countPercentValue(fatValue, 9),
        },
      ],
    });
  }, [currentTypeValue, unitValue, quantityValue]);

  const renderMacroBoxes = choosenProduct?.percentage?.map((item, index) => (
    <MacroBox
      key={item.name}
      percent={item.value}
      indexNumber={index}
      macroName={item.name}
      macroValue={item.currentValue}
      meal
    />
  ));

  const onSubmit = (data) => {
    const {
      protein,
      carbs,
      fat,
      name,
      path,
      quantityValue,
      unitName,
      converter,
    } = choosenProduct;

    const ingredientObject = {
      ...meal,
      ingredients: [
        ...meal.ingredients,
        {
          protein,
          carbs,
          fat,
          converter,
          ingredientImagePath: path,
          ingredientName: name,
          ingredientQuantity: Number(quantityValue),
          ingredientUnit: unitName,
          ingredientType: name,
        },
      ],
      realIngredients: [
        ...meal.realIngredients,
        { protein: protein, carbs: carbs, fat: fat },
      ],
    };
    callback(ingredientObject);
    closeModal();
  };

  console.log(choosenProduct);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Paragraph size={media ? 'big' : 'medium'} customMargin="30px 0 0" isBold>
        Dodaj produkt:
      </Paragraph>
      <Controller
        control={control}
        rules={{ required: true }}
        name="ingredientType"
        render={({ field: { onChange, value, ref, name } }) => (
          <Select
            inputRef={ref}
            id="select"
            placeholder="wybierz produkt..."
            onChange={onChange}
            value={value}
            optionsValue={products}
            name={name}
          />
        )}
      />

      <InlineWrapper>
        <FormField
          small
          {...register(`ingredientQuantity`, {
            required: true,
          })}
          type="number"
          name="ingredientQuantity"
          id="ingredientQuantity"
          placeholder="ilość"
        />
        <Controller
          control={control}
          name="ingredientUnit"
          rules={{ required: true }}
          render={({ field: { onChange, value, ref, name } }) => (
            <Select
              inputRef={ref}
              id="select"
              inputSize="small"
              onChange={onChange}
              value={value}
              optionsValue={
                currentTypeValue
                  ? renderOptions[0]?.unitsData
                  : defaultUnitOption
              }
              name={name}
            />
          )}
        />
      </InlineWrapper>

      {choosenProduct ? (
        <>
          <ProductName>
            <img src={choosenProduct.path} alt="Product icon" />
            <span>{choosenProduct.name}</span>
          </ProductName>
          <ProductQuant>
            <span>{`${choosenProduct.quantityValue} ${choosenProduct.unitName}`}</span>
            <span>{`${choosenProduct.calories} kcal`}</span>
          </ProductQuant>
          <MacroBoxesWrapper>{renderMacroBoxes}</MacroBoxesWrapper>
        </>
      ) : (
        <PlaceholderWrapper>
          <ProductPlaceholder />
        </PlaceholderWrapper>
      )}

      <InlineWrapper>
        <Button type="submit">Dodaj</Button>
        <Button onClick={closeModal} secondary>
          Wróć
        </Button>
      </InlineWrapper>
    </StyledForm>
  );
};

FindIngredient.propTypes = {};

export default FindIngredient;
