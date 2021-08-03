import styled from 'styled-components';
import { Wrapper } from 'components/organisms/AddProduct/AddProduct.style';

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
`;
