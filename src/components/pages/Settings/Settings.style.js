import styled from 'styled-components';
import { ErrorMessage } from 'components/pages/Login/Login.style';

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;

  button {
    align-self: flex-start;
    margin: 20px 0 0 50px;
  }
`;

export const Logout = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 80px 0 0;
  font-weight: 600;
  padding: 14px 30px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.mainBGC};
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
`;

export const ErrorSpan = styled(ErrorMessage)`
  margin-top: 15px;
`;

export const CurrentUserEmailBox = styled.div`
  width: 100%;
  margin: 40px 0 30px;
`;
