import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from 'components/pages/Login/Login.style';
import {
  StyledForm,
  StyledButton,
  StyledSpan,
  StyledHeader,
  SpanGroup,
} from 'components/pages/Login/Login.style';
import Input from 'components/atoms/Input/Input';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from 'actions/authActions';
import { SIGNIN } from 'constants/routes';
import { HOME } from 'constants/routes';
import { Link } from 'react-router-dom';
import Loader from 'components/atoms/Loader/Loader';
import { useHistory } from 'react-router-dom';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';

const Register = (props) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { apiCallProgress } = useSelector((state) => state.apiCallsReducer);
  const goHome = () => history.push(HOME);
  const onSubmit = (data) => {
    dispatch(signup(data.email, data.password, data.name, goHome));
  };
  return (
    <Wrapper>
      <StyledHeader>Zarejestruj się</StyledHeader>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Email"
          type="email"
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
        <Input
          placeholder="Twoje imię"
          type="name"
          {...register('name', {
            required: { value: true, message: 'Podaj swoje imię' },
          })}
        />
        {errors.name && (
          <ErrorMessage role="alert">{errors.name.message}</ErrorMessage>
        )}
        <Input
          placeholder="Hasło"
          type="password"
          {...register('password', {
            required: { value: true, message: 'Podaj hasło!' },
            minLength: {
              value: 6,
              message: 'hasło musi posiadać minimalnie 6 znaków!',
            },
          })}
        />
        {errors.password && (
          <ErrorMessage role="alert">{errors.password.message}</ErrorMessage>
        )}
        <StyledButton disabled={apiCallProgress === 1} type="submit">
          Zarejestruj się
        </StyledButton>
      </StyledForm>

      <SpanGroup>
        <StyledSpan>Masz już konto?</StyledSpan>
        <Link to={SIGNIN}>
          <StyledSpan isColor={true}>Zaloguj się!</StyledSpan>
        </Link>
      </SpanGroup>

      {apiCallProgress === 1 ? <Loader /> : null}
    </Wrapper>
  );
};

Register.propTypes = {};

export default Register;
