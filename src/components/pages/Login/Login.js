import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  LogoWrapper,
  StyledButton,
  StyledSpan,
  Wrapper
} from './Login.style';
import Input from 'components/atoms/Input/Input';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from 'actions/authActions';
import { SIGNUP } from 'constants/routes';
import { HOME } from 'constants/routes';
import { Link } from 'react-router-dom';
import Loader from 'components/atoms/Loader/Loader';
import { useHistory } from 'react-router-dom';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';

const Login = (props) => {
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
    dispatch(signin(data.email, data.password, goHome));
  };

  return (
    <Wrapper>
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
        <StyledButton disabled={apiCallProgress === 1} type="submit">
          Zaloguj się
        </StyledButton>
      </StyledForm>

      <StyledSpan>Nie masz jeszcze konta?</StyledSpan>
      <Link to={SIGNUP}>
        <StyledSpan isColor={true}>Zarejestruj się!</StyledSpan>
      </Link>
      {apiCallProgress === 1 ? <Loader /> : null}
    </Wrapper>
  );
};

Login.propTypes = {};

export default Login;
