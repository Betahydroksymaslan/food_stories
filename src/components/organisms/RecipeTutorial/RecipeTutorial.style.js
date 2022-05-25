import styled, { keyframes } from 'styled-components';
import {
  DeleteIcon,
  EditIcon,
} from 'components/molecules/IngredientItem/IngredientItem.style';

const bounce = keyframes`
from {
  box-shadow: 0 0 0 #ffe795,
   0px 9px 18px 0px rgba(0, 0, 0, 0.18);
} to {
  box-shadow: 0 0 0 15px #ffe79500 ,
  0px 9px 18px 0px rgba(0, 0, 0, 0.18);
}
`;

export const Wrapper = styled.div`
  width: 95vw;
  height: 100vh;
  padding: 0 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.media.desktop} {
    width: 500px;
    height: 80vh;
    padding: 0 20px 20px;
  }
`;

export const AnimationWrapper = styled.div`
  width: 100%;
  height: 80%;
  overflow: hidden;
  display: flex;
  position: relative;
`;

export const StepWrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 30px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  gap: 45px;
`;

export const NextButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.mainYellow};
  font-weight: 500;
  box-shadow: 0px 9px 18px 0px rgba(0, 0, 0, 0.18);
  color: ${({ theme }) => theme.colors.white};
  padding: 15px 40px;
  border-radius: 50px;
  animation: ${bounce} 700ms;
  transition: transform 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
    animation: none;
  }
`;

export const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  transition: all 0.2s ease-in-out;
  box-shadow: ${({ theme, current }) =>
    current ? `0 0 5px 0 ${theme.colors.mainYellow}` : 'none'};
  background: ${({ theme: { colors }, current }) =>
    current ? colors.mainYellow : colors.secondYellow};
`;

/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! PAGE 1 PRODUCT ANIMATION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

export const AnimationBox = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;

export const ProductNamesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  align-self: start;
  padding: 9px 0 0 15px;
`;

export const LookMoreProductInfo = styled.div`
  display: grid;
  align-items: center;
  height: 40px;
  width: 100%;
  grid-template-columns: 40px 1fr max-content;
  overflow: hidden;

  img {
    width: 40px;
    height: 40px;
  }
`;

export const ProductName = styled.span`
  grid-column: 2;
  grid-row: 1;
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme: { colors }, extra }) =>
    extra ? colors.mainYellow : colors.mainDark};
`;

/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! PAGE 3 BUTTONS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

export const DeleteIconTut = styled(DeleteIcon)`
  transform: rotate(45deg);
  display: inline-block;
  line-height: 0.9;

  ${({theme}) => theme.media.desktop} {
    line-height: 0.8;
  }
`;
export const EditIconTut = styled(EditIcon)`
  display: inline-block;
  line-height: 1.5;
`;
export const EndEditionTut = styled.button`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.xs};
  border: none;
  background: ${({ theme }) => theme.colors.secondColor};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 8px 13px;
  box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
`;

/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! PAGE 3 ADD VARIANT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

export const Option = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainYellow};
  width: max-content;
  font-size: ${({ theme }) => theme.fontSize.s};
`;
