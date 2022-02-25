import styled from 'styled-components';

export const FormsWrapper = styled.div`
  width: 100%;

  ${({ theme }) => theme.media.desktop} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

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

  ${({ theme }) => theme.media.desktop} {
    width: 280px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
    box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
    padding: 20px 0;
    margin: 10px 50px;

    button {
      align-self: center;
      margin: 20px 0 0 0;
    }
  }
`;

export const CurrentUserEmailBox = styled.div`
  width: 100%;
  margin: 20px 0 30px;

  ${({ theme }) => theme.media.desktop} {
  }
`;

export const ImageButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
