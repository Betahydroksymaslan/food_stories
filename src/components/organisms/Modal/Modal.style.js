import styled from 'styled-components';
import Modal from 'react-modal';

export const ModalWrapper = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  border: ${({ border }) =>
    border ? `2px solid ${({ theme }) => theme.colors.secondColor}` : 'none'};
  transform: translate(-50%, -50%);
  min-width: 250px;
  min-height: 150px;
  max-height: 95vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  z-index: 999;

  &:focus {
    outline: none;
  }

  ${({ theme }) => theme.media.phoneKeyboard} {
    max-height: 100vh;
  }
`;
