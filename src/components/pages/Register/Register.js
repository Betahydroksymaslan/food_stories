import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from 'components/templates/PageWrapper/PageWrapper';
import {
  StyledForm,
  LogoWrapper,
  StyledButton,
  StyledSpan,
  ErrorMessage,
} from 'components/pages/Login/Login.style';
import Input from 'components/atoms/Input/Input';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signup } from 'actions/authActions';
import { HOME, SIGNIN } from 'constants/routes';
import { Link } from 'react-router-dom';

const Register = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(signup(data.email, data.password, () => props.history.push(HOME)));
  };
  return (
    <PageWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
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
        <StyledButton type="submit">ZAREJESTRUJ SIĘ</StyledButton>
      </StyledForm>

      <StyledSpan>Masz już konto?</StyledSpan>
      <Link to={SIGNIN}>
        <StyledSpan isColor={true}>Zaloguj się!</StyledSpan>
      </Link>
    </PageWrapper>
  );
};

Register.propTypes = {};

export default Register;
