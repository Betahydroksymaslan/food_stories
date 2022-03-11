import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20% 60% 20%;
  grid-column: 1/ -1;
  grid-row: 1 / -1;
  justify-items: center;
`;

export const StyledHeader = styled.h1`
  align-self: center;
  margin: 30px 0 0;
  padding: 0;
  font-size: 35px;
`;

export const StyledForm = styled.form`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  ${({ theme }) => theme.media.desktop} {
    width: 35%;
    max-width: 350px;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  margin: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
  border: none;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.secondColor};
  padding: 12px 0;
  color: ${({ theme }) => theme.colors.mainBGC};
  outline: none;
  cursor: pointer;
  font-weight: 600;
  &:disabled {
    opacity: 0.5;
  }
  ${({ theme }) => theme.media.desktop} {
    transition: opacity 0.3s ease;
    font-size: ${({ theme }) => theme.fontSize.xs};
    &:hover {
      opacity: 0.9;
    }
  }
`;

export const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ isColor, theme }) => isColor && theme.colors.secondColor};
  text-decoration: ${({ isColor }) => isColor && 'underline'};

  ${({theme}) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const SocialButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  background: ${({ isGoogle, theme }) =>
    isGoogle ? theme.colors.white : '#1877f2'};
  color: ${({ isGoogle, theme }) =>
    isGoogle ? theme.colors.mainDark : theme.colors.white};
  font-weight: 500;
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};
  font-size: ${({ theme }) => theme.fontSize.s};

  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xs};
    height: 40px;

    &:hover {
      cursor: pointer;
      opacity: .9;
    }
  }
`;

export const ButtonIconWrapper = styled.div`
  width: 50px;
  height: 50px;
  font-size: 25px;
  display: grid;
  place-items: center;

  ${({ theme }) => theme.media.desktop} {
    width: 40px;
    height: 40px;
    font-size: 20px;
    margin-right: 10%;

    img {
      width: 50%;
    }
  }
`;

export const SpanGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;
