import styled from 'styled-components';

export const LogoWrapper = styled.div`
  width: 200px;
  margin: 100px 0 40px;
  svg {
    width: 100%;
    height: 90px;
  }
`;

export const StyledForm = styled.form`
  width: 75%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 70px;
`;

export const StyledButton = styled.button`
  width: 100%;
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};
  border: none;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.mainGradient};
  padding: 12px 0;
  color: ${({ theme }) => theme.colors.mainBGC};
  outline: none;
`;

export const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ isColor, theme }) => isColor && theme.colors.mainColor};
  text-decoration: ${({ isColor }) => isColor && 'underline'};
`;

export const ErrorMessage = styled.span`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.error};
`;
