import styled, { keyframes } from 'styled-components';
import { Wrapper } from 'components/organisms/AddProduct/AddProduct.style';

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

export const DeleteBox = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.error};
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    width: 10px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.mainBGC};
    border-radius: 3px;
  }
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const AddPhotoButton = styled.input`
  width: 100px;
  height: 100px;
  position: relative;

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

export const ImagePreview = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  overflow: hidden;
  margin-left: 20px;

  & img {
    width: 100%;
    height: 100%;
  }
`;
