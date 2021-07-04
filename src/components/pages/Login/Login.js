import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from 'components/templates/PageWrapper/PageWrapper';
import {
  StyledForm,
  LogoWrapper,
  StyledButton,
  StyledSpan,
  ErrorMessage,
} from './Login.style';
import Input from 'components/atoms/Input/Input';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signin } from 'actions/authActions';
import { HOME, SIGNUP } from 'constants/routes';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(signin(data.email, data.password, () => props.history.push(HOME)));
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
          {...register('email', { required: true })}
        />
        {errors.email && (
          <ErrorMessage role="alert">Podaj adres email!</ErrorMessage>
        )}
        <Input
          placeholder="Hasło"
          type="password"
          {...register('password', { required: true })}
        />
        {errors.password && (
          <ErrorMessage role="alert">Podaj hasło!</ErrorMessage>
        )}
        <StyledButton type="submit">ZALOGUJ SIĘ</StyledButton>
      </StyledForm>

      <StyledSpan>Nie masz jeszcze konta?</StyledSpan>
      <Link to={SIGNUP}>
        <StyledSpan isColor={true}>Zarejestruj się!</StyledSpan>
      </Link>
    </PageWrapper>
  );
};

Login.propTypes = {};

export default Login;
