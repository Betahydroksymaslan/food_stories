import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  StyledForm,
  TypeOfProductWrapper,
  ListWrapper,
  ListItem,
  Icon,
  ListItemWrapper,
} from './AddProduct.style';
import Button from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import Input from 'components/atoms/Input/Input';
import { db } from 'assets/firebase/firebase';
import { addDatabase } from 'actions/databaseActions';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useWatchDatabase } from 'hooks/useWatchDatabase';
import Close from 'components/atoms/Close/Close';

const AddProduct = ({ closeModal }) => {
  /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! CONTROLL FORM AREA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
  const dispatch = useDispatch();
  const [choosenType, setChoosenType] = useState({ path: '', name: '' });
  const [typeError, setTypeError] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const errorIsRequired = 'To pole jest wymagane';
  const watchName = watch('productName');
  const watchDatabase = useWatchDatabase(`products/${watchName}`, watchName);

  const onSubmit = (data) => {
    if (watchDatabase) return;
    if (choosenType.name === '') return setTypeError('Wybierz typ produktu');

    const dataObject = {
      name: data.productName,
      protein: Number(data.productProtein),
      carbs: Number(data.productCarbs),
      fat: Number(data.productFat),
      iconPath: choosenType.path,
      iconName: choosenType.name,
    };
    const path = `products/${data.productName}`;
    const message = 'Dodano nowy produkt!';

    dispatch(addDatabase(path, dataObject, message));
    closeModal();
  };

  /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! PICK TYPE OF A PRODUCT AREA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

  const [isTypeVisible, setIsTypeVisible] = useState(false);
  const openProductType = () => setIsTypeVisible(true);
  const closeProductType = () => setIsTypeVisible(false);

  const [productTypes, setProductTypes] = useState([]);

  useEffect(() => {
    const ref = db.ref('/ingredients_icons');
    let unsubscribe;
    const watch = () => {
      unsubscribe = ref.on('value', (snapshot) => {
        const data = snapshot.val();
        const temporaryData = [];
        for (let id in data) {
          temporaryData.push({ name: id, path: data[id] });
        }
        setProductTypes(temporaryData);
      });
    };
    watch();
    return () => unsubscribe;
  }, []);

  const [searchValue, setSearchValue] = useState('');

  const filterList = productTypes.filter((item) => {
    if (!searchValue) return productTypes;
    return item.name.includes(searchValue);
  });

  const handleOnChange = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const pickTypeOfProduct = (e) => {
    setChoosenType({
      path: e.target.dataset.path,
      name: e.target.dataset.name,
    });
    closeProductType();
  };

  const renderProductList = filterList.map((item) => (
    <ListItemWrapper
      key={item.name}
      data-path={item.path}
      data-name={item.name}
      onClick={pickTypeOfProduct}
    >
      <Icon src={item.path} data-path={item.path} data-name={item.name} />
      <ListItem data-path={item.path} data-name={item.name}>
        {item.name}
      </ListItem>
    </ListItemWrapper>
  ));

  return (
    <Wrapper>
      <Close closePosition="top-right" onClick={closeModal} />
      <Paragraph isBold size="big">
        Dodaj nowy produkt
      </Paragraph>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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

        <Paragraph
          customMargin="35px 0 0"
          hoverEffect
          isBold
          onClick={openProductType}
        >
          Dopasuj typ produktu &rarr;
        </Paragraph>
        {choosenType?.name ? (
          <ListItemWrapper>
            <Icon src={choosenType.path} />
            <ListItem>{choosenType.name}</ListItem>
          </ListItemWrapper>
        ) : (
          <Paragraph customMargin="0 0 25px" size="small">
            Nie wybrano jeszcze typu
          </Paragraph>
        )}
        <ErrorMessage>{typeError && typeError}</ErrorMessage>
        <FormField
          name="productProtein"
          id="productProtein"
          label="Białko (g)"
          type="number"
          small={true}
          {...register('productProtein', { required: true })}
        />
        {errors.productProtein && (
          <ErrorMessage>{errorIsRequired}</ErrorMessage>
        )}

        <FormField
          name="productCarbs"
          id="productCarbs"
          label="Węglowodany (g)"
          type="number"
          small={true}
          {...register('productCarbs', { required: true })}
        />
        {errors.productCarbs && <ErrorMessage>{errorIsRequired}</ErrorMessage>}

        <FormField
          name="productFat"
          id="productFat"
          label="Tłuszcze (g)"
          type="number"
          small={true}
          {...register('productFat', { required: true })}
        />
        {errors.productFat && <ErrorMessage>{errorIsRequired}</ErrorMessage>}

        <Button type="submit">dodaj produkt</Button>
      </StyledForm>

      {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! PICK TYPE OF A PRODUCT AREA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}

      <TypeOfProductWrapper isTypeVisible={isTypeVisible}>
        <span onClick={closeProductType}>wróc</span>

        <Input value={searchValue} onChange={handleOnChange} search={true} />
        <ListWrapper>{renderProductList}</ListWrapper>
      </TypeOfProductWrapper>
    </Wrapper>
  );
};

AddProduct.propTypes = { closeModal: PropTypes.func };

export default AddProduct;
