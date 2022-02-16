import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/molecules/FormField/FormField';
import { useDispatch, useSelector } from 'react-redux';
import { changeEmail, changePassword } from 'actions/authActions';
import Header from 'components/atoms/Header/Header';
import PageWrapper from 'components/templates/PageWrapper/PageWrapper';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Modal from 'components/organisms/Modal/Modal';
import AddProduct from 'components/organisms/AddProduct/AddProduct';
import AddMeal from 'components/organisms/AddMeal/AddMeal';
import AddNewMealCategory from 'components/organisms/AddNewMealCategory/AddNewMealCategory';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import {
  StyledForm,
  CurrentUserEmailBox,
  ImageButtonsWrapper,
} from './Settings.style';
import { useForm } from 'react-hook-form';
import { useMedia } from 'hooks/useMedia';
import { ReactComponent as AddIngredientsImage } from 'assets/images/addIngredientsImage.svg';
import { ReactComponent as AddMealImage } from 'assets/images/addMealImage.svg';
import { ReactComponent as AddMealCategoryImage } from 'assets/images/addMealCategoryImage.svg';
import ImageButton from 'components/molecules/ImageButton/ImageButton';
import Logout from 'components/atoms/Logout/Logout';

const Settings = (props) => {
  const media = useMedia('(max-width: 600px)');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);
  const apiCallProgress = useSelector(
    (state) => state.apiCallsReducer.apiCallsReducer
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword },
  } = useForm();
  const onEmailSubmit = (data) => dispatch(changeEmail(data.email));
  const onPasswordSubmit = (data) => dispatch(changePassword(data.password));

  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const openAddProductModal = () => setIsAddProductOpen(true);
  const closeAddProductModal = () => setIsAddProductOpen(false);

  const [isAddMealOpen, setIsAddMealOpen] = useState(false);
  const openAddMealModal = () => setIsAddMealOpen(true);
  const closeAddmealModal = () => setIsAddMealOpen(false);

  const [isAddNewCategoryOpen, setIsAddNewCategoryOpen] = useState(false);
  const openAddNewCategory = () => setIsAddNewCategoryOpen(true);
  const closeAddNewCategory = () => setIsAddNewCategoryOpen(false);

  return (
    <>
      <PageWrapper>
        {media && <Header>Moje Konto</Header>}

        <CurrentUserEmailBox>
          <Paragraph>Jesteś zalogowany jako:</Paragraph>
          <Paragraph isBold={true}>{auth.email}</Paragraph>
        </CurrentUserEmailBox>

        <StyledForm onSubmit={handleSubmit(onEmailSubmit)}>
          <FormField
            label="Zmień email"
            type="email"
            name="email"
            id="email"
            placeholder="nowy email"
            {...register('email', {
              required: { value: true, message: 'Podaj adres email!' },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Podana wartość nie wygląda jak adres email!',
              },
            })}
          />
          {errors.email && (
            <ErrorMessage role="alert">{errors.email.message}</ErrorMessage>
          )}
          <Button type="submit" disabled={apiCallProgress === 1}>
            zmień
          </Button>
        </StyledForm>

        <StyledForm onSubmit={handleSubmitPassword(onPasswordSubmit)}>
          <FormField
            label="Zmień hasło"
            type="password"
            name="password"
            id="password"
            placeholder="nowe hasło"
            {...registerPassword('password', {
              required: { value: true, message: 'Podaj hasło!' },
              minLength: {
                value: 6,
                message: 'hasło musi posiadać minimalnie 6 znaków!',
              },
            })}
          />
          {errorsPassword.password && (
            <ErrorMessage role="alert">
              {errorsPassword.password.message}
            </ErrorMessage>
          )}
          <Button type="submit" disabled={apiCallProgress === 1}>
            zmień
          </Button>
        </StyledForm>

        <ImageButtonsWrapper>
          <ImageButton
            onClick={openAddProductModal}
            text="+ dodaj nowy produkt"
          >
            <AddIngredientsImage />
          </ImageButton>
          <ImageButton onClick={openAddMealModal} text="+ dodaj nowy posiłek">
            <AddMealImage />
          </ImageButton>
          <ImageButton
            onClick={openAddNewCategory}
            text="+ dodaj nową kategorię"
          >
            <AddMealCategoryImage />
          </ImageButton>
        </ImageButtonsWrapper>

        {media && <Logout />}

        
        <Modal
        isOpen={isAddProductOpen}
        shouldCloseOnOverlayClick={false}
        handleClose={closeAddProductModal}
      >
        <AddProduct closeModal={closeAddProductModal} />
      </Modal>

      <Modal isOpen={isAddMealOpen} handleClose={closeAddmealModal}>
        <AddMeal closeModal={closeAddmealModal} />
      </Modal>

      <Modal isOpen={isAddNewCategoryOpen} handleClose={closeAddNewCategory}>
        <AddNewMealCategory closeModal={closeAddNewCategory} />
      </Modal>
      </PageWrapper>
      
    </>
  );
};

Settings.propTypes = {};

export default Settings;
