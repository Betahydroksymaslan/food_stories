import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.paperYellow};
  position: relative;
  padding: 20px 15px 10px;
  margin-right: 10px;
  width: 90%;
  border-radius: 15px;
  filter: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.1));

  span {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  input {
    border: none;
    background: transparent;
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 0;
    margin: 0;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: -25px;
  right: -15px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.paperYellow};
  display: grid;
  place-items: center;
  font-size: 25px;
`;

export const EditBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0 0;

  span {
    font-size: 30px;
    display: grid;
    place-items: center;
  }
`;
