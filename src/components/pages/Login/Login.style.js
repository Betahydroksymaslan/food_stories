import styled from 'styled-components';

export const LogoWrapper = styled.div`
  width: 200px;
  margin: 100px 0 40px;
  svg {
    width: 100%;
    height: 90px;
  }
  ${({ theme }) => theme.media.desktop} {
    margin: 65px 0 40px;
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
  ${({ theme }) => theme.media.desktop} {
    width: 35%;
    max-width: 350px;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
  border: none;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.mainColor};
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
    &:hover {
      opacity: 0.9;
    }
  }
`;

export const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ isColor, theme }) => isColor && theme.colors.mainColor};
  text-decoration: ${({ isColor }) => isColor && 'underline'};
`;