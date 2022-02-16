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

export const AddMealWrapper = styled(Wrapper)`
  height: 100vh;
  overflow-y: scroll;
  z-index: 999;

  ${({ theme }) => theme.media.desktop} {
  }
`;

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

  ${({ theme }) => theme.media.desktop} {
    width: 90vw;
  }
`;

export const IngredientAndRecipesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
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
  z-index: 998;

  ${({ theme }) => theme.media.desktop} {
    width: 250px;
    margin-right: 20px;
  }
`;

export const InlineWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  z-index: 0;
`;

export const InlineWrapperForButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  z-index: 0;

  ${({ theme }) => theme.media.desktop} {
    flex-direction: column;
    width: 150px;
    justify-content: center;
    align-items: flex-start;
  }
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

  &:hover {
    cursor: pointer;
  }

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
    transition: transform 0.4s ease-in-out;
    transform-origin: center;
  }

  &:hover::after {
      transform: translate(-50%, -50%) scale(1.3) rotate(180deg);
    }
`;

export const AddRemoveButton = styled.button`
  background-color: white;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  border: none;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.25);
  position: relative;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme: { colors } }) => colors.secondYellow};
  }

  &::before,
  &::after {
    content: '';
    width: 50%;
    height: 4px;
    background-color: ${({ theme: { colors } }) => colors.secondColor};
    position: absolute;
    border-radius: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::after {
    display: ${({ remove }) => (remove ? 'none' : 'block')};
    transform: translate(-50%, -50%) rotate(90deg);
    transform-origin: center;
  }
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  z-index: 1000;

  span {
    font-size: 22px;
    margin: 40px 0 30px;
    font-weight: 500;

    ${({ theme }) => theme.media.desktop} {
      margin: 60px 0 4 0px;
    }
  }
`;

export const ProgressBar = styled.div`
  width: 80%;
  height: 10px;
  border-radius: 5px;
  background-color: #d9f2d9;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    transition: transform 0.5s ease-in-out;
    width: 100%;
    transform: ${({ proggress }) => `scaleX(${proggress}%)`};
    transform-origin: left;
    height: 100%;
    background-color: #339933;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 5px;
  }

  ${({ theme }) => theme.media.desktop} {
    width: 50%;
  }
`;
