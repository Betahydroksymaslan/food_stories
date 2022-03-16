import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding-left: 30px;
  margin: 20px 0 0;

  &::before {
    content: '${({ isChecked }) => (isChecked ? '\\2714' : '')}';
    font-size: 22px;
    padding-bottom: 2px;
    width: 20px;
    height: 20px;
    transition: all 0.2s ease-in-out;
    background: ${({ isChecked, theme: { colors } }) =>
      isChecked ? colors.success : colors.white};
    color: ${({ isChecked, theme: { colors } }) => isChecked && colors.white};
    border: ${({ isChecked, theme }) =>
      isChecked
        ? `1px solid ${theme.colors.success}`
        : `1px solid ${theme.colors.mainDark}`};
    position: absolute;
    top: 50%;
    left: 0;
    border-radius: 5px;
    display: grid;
    place-items: center;
    transform: translateY(-50%);
  }
`;

export const Checkbox = styled.input.attrs((props) => ({
  type: 'checkbox',
}))`
  display: none;
`;
