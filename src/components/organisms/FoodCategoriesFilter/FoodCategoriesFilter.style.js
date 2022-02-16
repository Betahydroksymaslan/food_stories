import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 60px;
  max-height: 60px;
  position: relative;
  display: inline-flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 1rem;
  padding: 0 10px;
  margin: 15px 0;
  gap: 10px;
  ::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }) => theme.media.desktop} {
    transition: all 0.2s ease-in-out;

    &:active {
      cursor: grabbing;
    }
  }
`;

export const StyledLabel = styled.label`
  width: auto;
  height: 45px;
  border-radius: 40px;
  transition: all 0.2s ease-in-out;
  color: ${({ theme: { colors }, isChecked }) => isChecked && colors.white};
  background-color: ${({ theme: { colors }, isChecked }) =>
    isChecked ? colors.secondColor : colors.white};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-contene: center;
  padding: 0 15px;
  text-align: center;
  white-space: nowrap;
  user-select: none;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    transition: filter 0.2s ease-in-out;
    filter: ${({ isChecked }) => isChecked && ' invert(1)'};
  }

  ${({ theme }) => theme.media.desktop} {
    height: 40px;
    font-size: 13px;

    &:hover {
      cursor: pointer;
      background: ${({ isChecked }) => !isChecked && '#f2f2f2'};
    }
    &:active {
      cursor: grabbing;
    }
    img {
      width: 22px;
      height: 22px;
    }
  }
`;

export const Category = styled.input.attrs((props) => ({
  type: 'checkbox',
}))`
  display: none;
`;

