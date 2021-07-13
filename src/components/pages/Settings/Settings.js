import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/molecules/FormField/FormField';
import { useDispatch, useSelector } from 'react-redux';
import { logout, changeEmail, changePassword } from 'actions/authActions';
import Header from 'components/atoms/Header/Header';
import PageWrapper from 'components/templates/PageWrapper/PageWrapper';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Loader from 'components/atoms/Loader/Loader';
import {
  StyledForm,
  Logout,
  ErrorSpan,
  CurrentUserEmailBox,
} from './Settings.style';
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

  return (
    <PageWrapper>
      <Header>Moje Konto</Header>
      
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
          <ErrorSpan role="alert">{errors.email.message}</ErrorSpan>
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
          <ErrorSpan role="alert">{errorsPassword.password.message}</ErrorSpan>
        )}
        <Button type="submit" disabled={apiCallProgress === 1}>
          zmień
        </Button>
      </StyledForm>

      <Logout onClick={() => dispatch(logout())}>wyloguj</Logout>
      {apiCallProgress === 1 ? <Loader /> : null}
    </PageWrapper>
  );
};

Settings.propTypes = {};

export default Settings;
