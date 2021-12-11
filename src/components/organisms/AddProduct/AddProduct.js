import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  StyledForm,
  ListItem,
  Icon,
  ListItemWrapper,
} from './AddProduct.style';
import Button from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { db } from 'assets/firebase/firebase';
import { addDatabase } from 'actions/databaseActions';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useWatchDatabase } from 'hooks/useWatchDatabase';
import Close from 'components/atoms/Close/Close';
import Select from 'components/atoms/Select/Select';
import { components } from 'react-select';

const AddProduct = ({ closeModal }) => {
  /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! CONTROLL FORM AREA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
  const dispatch = useDispatch();

  const units = [
    { label: 'g', value: 'g' },
    { label: 'kg', value: 'kg' },
    { label: 'l', value: 'l' },
    { label: 'ml', value: 'ml' },
    { label: 'ząbek', value: 'ząbek' },
    { label: 'jedno/a', value: 'jedno/a' },
    { label: 'ćwiartka', value: 'ćwiartka' },
    { label: 'połówka', value: 'połówka' },
  ];

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const errorIsRequired = 'To pole jest wymagane';
  const watchName = watch('productName');
  const watchDatabase = useWatchDatabase(`products/${watchName}`, watchName);

  const onSubmit = (data) => {
    if (watchDatabase) return; //IF PRODUCT EXISTS IN DATABASE

    const dataObject = {
      name: data.productName,
      protein: Number(data.productProtein),
      carbs: Number(data.productCarbs),
      fat: Number(data.productFat),
      productType: data.productType,
      units: data.productUnits.map((unit) => {
        return {
          name: unit,
          value: Number(data.units[unit]),
        };
      }),
    };
    const path = `products/${data.productName}`;
    const message = 'Dodano nowy produkt!';

    dispatch(addDatabase(path, dataObject, message));
    closeModal();
  }; 
  const countDefaultUnitValue = (value) => {
    if (value === 'kg' || value === 'l') return 1000;
    if (value === 'g' || value === 'ml') return 1;
    return null;
  };

  const choosenUnits = watch('productUnits');

  const renderUnitBoxes = Array.isArray(choosenUnits)
    ? choosenUnits.map((item, index) => (
        <div key={item}>
          <FormField
            defaultValue={countDefaultUnitValue(item)}
            id={item}
            name={item}
            type="number"
            label={`"${item}" to:`}
            placeholder="wartość w gramch"
            {...register(`units.${item}`, {
              required: `Podaj przelicznik ${item} na gramy!`,
            })}
          />
          {errors.units && errors.units[index]?.[item] && (
            <ErrorMessage>
              error {errors.units[index][item].message}
            </ErrorMessage>
          )}
        </div>
      ))
    : null;
  //console.log(errors);
  //const onSubmit = (data) => console.log(data);

  const [productTypes, setProductTypes] = useState([]);

  useEffect(() => {
    const ref = db.ref('/ingredients_icons');
    let unsubscribe;
    const watch = () => {
      unsubscribe = ref.on('value', (snapshot) => {
        const data = snapshot.val();
        const temporaryData = [];
        for (let id in data) {
          temporaryData.push({
            name: id,
            path: data[id],
            value: id,
            label: id,
          });
        }
        setProductTypes(temporaryData);
      });
    };
    watch();
    return () => unsubscribe;
  }, []);

  const { Option, Control } = components;

  const IconOption = (props) => (
    <Option {...props}>
      <ListItemWrapper>
        <Icon src={props.data.path} />
        <ListItem>{props.data.name}</ListItem>
      </ListItemWrapper>
    </Option>
  );

  const IconControl = ({ children, ...props }) => (
    <Control {...props}>
      {props?.data?.path && <Icon src={props.data.path} />}
      {children}
    </Control>
  );

  return (
    <Wrapper>
      <Close closePosition="top-right" onClick={closeModal} />
      <Paragraph isBold size="big">
        Dodaj nowy produkt
      </Paragraph>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <FormField
            name="productName"
            id="productName"
            placeholder="nazwij produkt"
            label="Nazwa produktu"
            {...register('productName', { required: true })}
          />
          {errors.productName && <ErrorMessage>{errorIsRequired}</ErrorMessage>}
          {watchDatabase && (
            <ErrorMessage>Taki produkt już istnieje</ErrorMessage>
          )}
        </div>

        <div>
          <Controller
            control={control}
            rules={{ required: 'Wybierz typ produktu!' }}
            name="productType"
            render={({ field: { onChange, value, ref, name } }) => (
              <Select
                inputRef={ref}
                id="select"
                label="wybierz typ produktu"
                components={{ Option: IconOption, Control: IconControl }}
                onChange={onChange}
                value={value}
                optionsValue={productTypes}
                name={name}
              />
            )}
          />
          {errors.productType && (
            <ErrorMessage>{errors.productType.message}</ErrorMessage>
          )}
        </div>

        <div>
          <FormField
            name="productProtein"
            id="productProtein"
            label="Białko (g)"
            step="0.1"
            type="number"
            small={true}
            {...register('productProtein', { required: true })}
          />
          {errors.productProtein && (
            <ErrorMessage>{errorIsRequired}</ErrorMessage>
          )}
        </div>

        <div>
          <FormField
            name="productCarbs"
            id="productCarbs"
            label="Węglowodany (g)"
            type="number"
            step="0.1"
            small={true}
            {...register('productCarbs', { required: true })}
          />
          {errors.productCarbs && (
            <ErrorMessage>{errorIsRequired}</ErrorMessage>
          )}
        </div>

        <div>
          <FormField
            name="productFat"
            id="productFat"
            step="0.1"
            label="Tłuszcze (g)"
            type="number"
            small={true}
            {...register('productFat', { required: true })}
          />
          {errors.productFat && <ErrorMessage>{errorIsRequired}</ErrorMessage>}
        </div>

        <div>
          <Controller
            control={control}
            rules={{ required: 'Wybierz jednostki!' }}
            name="productUnits"
            render={({ field: { onChange, value, ref, name } }) => (
              <Select
                inputRef={ref}
                id="select"
                label="wybierz jednostki"
                isMulti
                onChange={onChange}
                value={value}
                optionsValue={units}
                name={name}
              />
            )}
          />
          {errors.productUnits && (
            <ErrorMessage>{errors.productUnits.message}</ErrorMessage>
          )}
        </div>

        {renderUnitBoxes}

        <Button isBig={true} type="submit">dodaj produkt</Button>
      </StyledForm>
    </Wrapper>
  );
};

AddProduct.propTypes = { closeModal: PropTypes.func };

export default AddProduct;

