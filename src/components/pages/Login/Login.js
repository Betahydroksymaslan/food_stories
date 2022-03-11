import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledButton,
  StyledSpan,
  Wrapper,
  SocialButton,
  ButtonIconWrapper,
  SpanGroup,
  StyledHeader,
} from './Login.style';
import Input from 'components/atoms/Input/Input';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signin, googleSignin, facebookSignin } from 'actions/authActions';
import { SIGNUP } from 'constants/routes';
import { HOME } from 'constants/routes';
import { Link } from 'react-router-dom';
import Loader from 'components/atoms/Loader/Loader';
import { useHistory } from 'react-router-dom';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { BsFacebook } from 'react-icons/bs';

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
  const loginWithGoogle = () => dispatch(googleSignin(goHome));
  const loginWithFacebook = () => dispatch(facebookSignin(goHome));

  return (
    <Wrapper>
      <StyledHeader>Zaloguj się</StyledHeader>
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

        <SocialButton onClick={loginWithGoogle} isGoogle={true} type="button">
          <ButtonIconWrapper>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google icon"
            />
          </ButtonIconWrapper>
          Zaloguj się z Google
        </SocialButton>

        <SocialButton onClick={loginWithFacebook} type="button">
          <ButtonIconWrapper>
            <BsFacebook />
          </ButtonIconWrapper>
          Zaloguj się z Facebook
        </SocialButton>
      </StyledForm>

      <SpanGroup>
        <StyledSpan>Nie masz jeszcze konta?</StyledSpan>
        <Link to={SIGNUP}>
          <StyledSpan isColor={true}>Zarejestruj się!</StyledSpan>
        </Link>
      </SpanGroup>

      {apiCallProgress === 1 ? <Loader /> : null}
    </Wrapper>
  );
};

Login.propTypes = {};

export default Login;
