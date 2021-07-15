import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/molecules/FormField/FormField';
import { useDispatch, useSelector } from 'react-redux';
import { logout, changeEmail, changePassword } from 'actions/authActions';
import Header from 'components/atoms/Header/Header';
import PageWrapper from 'components/templates/PageWrapper/PageWrapper';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Loader from 'components/atoms/Loader/Loader';
import Modal from 'components/organisms/Modal/Modal';
import AddProduct from 'components/organisms/AddProduct/AddProduct';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { StyledForm, Logout, CurrentUserEmailBox } from './Settings.style';
import { useForm } from 'react-hook-form';

const Settings = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);
  const apiCallProgress = useSelector((state) => state.apiCallsReducer);

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <PageWrapper>
      <Header>Moje Konto</Header>

      <CurrentUserEmailBox>
        <Paragraph>Jesteś zalogowany jako:</Paragraph>
        <Paragraph isBold={true}>
          {auth.email}
        </Paragraph>
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

      <Button onClick={openModal}>+ dodaj nowy produkt</Button>

      <Logout onClick={() => dispatch(logout())}>wyloguj</Logout>

      <Modal
        isOpen={isModalOpen}
        shouldCloseOnOverlayClick={false}
        handleClose={closeModal}
      >
        <AddProduct closeModal={closeModal} />
      </Modal>

      {apiCallProgress === 1 ? <Loader /> : null}
    </PageWrapper>
  );
};

Settings.propTypes = {};

export default Settings;
