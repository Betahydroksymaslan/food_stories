import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  padding: 20px 40px 0;
  ${({ theme }) => theme.media.phoneKeyboard} {
    width: 100vw;
  }
  ${({ theme }) => theme.media.desktop} {
    width: auto;
  }
`;

export const StyledForm = styled.form`
    width: 100%;
    padding: 20px 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
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

export const ImagesWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;

  & img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;
