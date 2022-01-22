import styled, { keyframes } from 'styled-components';
import { Wrapper } from 'components/organisms/AddProduct/AddProduct.style';
import Button from 'components/atoms/Button/Button';

const fadeAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AddMealWrapper = styled(Wrapper)``;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  padding: 0;

  button {
    align-self: center;
    margin-top: 20px;
  }
`;

export const IngredientBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 15px 25px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
  border-radius: 20px;
  margin: 10px 0;
  animation: ${fadeAnimation} 0.5s cubic-bezier(0.28, 0.84, 0.42, 1) 1 forwards;
`;

export const InlineWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  z-index: 1000;
`;

export const ImagesWrapper = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

export const AddPhotoButton = styled.input`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;

  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  &::before {
    display: block;
    outline: none;
    content: '';
    white-space: nowrap;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 2px dashed ${({ theme }) => theme.colors.mainColor};
  }

  &::after {
    width: 40px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
    border-radius: 100%;
    content: '+';
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: ${({ theme }) => theme.colors.mainColor};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;



export const RemoveButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.inputBorder};
`;
