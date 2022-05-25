import styled from 'styled-components';

export const BackWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 100px;
  background: ${({ theme }) => theme.colors.paperYellow};
  z-index: 1000;
  border-radius: 100%;
  padding: 15px;
  display: grid;
  place-items: center;

  div {
    width: 12px;
    height: 12px;
    border-bottom-left-radius: 3px;
    transform: translateX(25%) rotate(45deg);
    border-left: 2px solid ${({ theme }) => theme.colors.mainDark};
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainDark};
  }
`;
