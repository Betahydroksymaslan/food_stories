import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  overflow-x: scroll;
  padding: 0 10px;

  ::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }) => theme.media.desktop} {
    ::-webkit-scrollbar {
      display: block;
    }
  }
`;

export const StyledLabel = styled.label`
  width: auto;
  height: 50px;
  border-radius: 40px;
  margin-right: 10px;
  color: ${({ theme: { colors }, isChecked }) => isChecked && colors.white};
  background-color: ${({ theme: { colors }, isChecked }) =>
    isChecked ? colors.secondColor : colors.white};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-contene: center;
  padding: 0 15px;
  text-align: center;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    filter: ${({ isChecked }) => isChecked && ' invert(1)'};
  }
`;

export const Category = styled.input.attrs((props) => ({
  type: 'checkbox',
}))`
  display: none;
`;
