import styled from 'styled-components';

export const ImagesWrapper = styled.div`
  width: min-content;
  padding: 5px;
  flex-wrap: wrap;
  min-width: 150px;
  min-height: 150px;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  gap: 1px;
  border: 2px dashed ${({ theme, isDragActive }) => isDragActive ? theme.colors.darkBlue : theme.colors.mainColor};

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

  ${({theme}) => theme.media.desktop} {
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
