import styled from 'styled-components';

interface ImageWrapperProps {
  isDragActive: boolean;
}

export const ImagesWrapper = styled.div<ImageWrapperProps>`
  width: min-content;
  padding: 5px;
  flex-wrap: wrap;
  min-width: 150px;
  min-height: 150px;
  display: flex;
  justify-content: center;
  position: relative;
  /* overflow: hidden; */
  border-radius: 5px;
  gap: 1px;
  border: 2px dashed
    ${({ theme, isDragActive }) =>
      isDragActive ? theme.colors.darkBlue : theme.colors.mainColor};

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

  & img {
    width: 150px;
    aspect-ratio: 1/1;
    object-fit: cover;
    z-index: -1;
  }

  ${({ theme }) => theme.media.desktop} {
    width: fit-content;

    &:hover {
      cursor: pointer;
    }
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
`;

export const ClearButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.error};
  border: 2px solid ${({ theme }) => theme.colors.error};
  display: grid;
  place-items: center;
  position: absolute;
  top: -25px;
  right: -25px;
  z-index: 1000;
  padding: 0;
  margin-top: 0;

  ${({ theme }) => theme.media.desktop} {
    width: 40px;
    height: 40px;
    top: -15px;
    right: -15px;

    &:hover {
      background-color: #ffc4c4;
    }
  }
`;
