import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  ${({ theme }) => theme.media.phoneKeyboard} {
    width: 100vw;
  }
`;

export const TypeOfProductWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-height: 95vh;
  overflow-y: scroll;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  transform: translateX(
    ${({ isTypeVisible }) => (isTypeVisible ? '0' : '100%')}
  );
  background-color: ${({ theme }) => theme.colors.white};
  transition: transform 0.3s ease-in-out;
  ${({ theme }) => theme.media.phoneKeyboard} {
    max-height: 100vh;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  padding: 0 30px;

  button {
    align-self: center;
    margin-top: 20px;
  }
`;

export const ListWrapper = styled.ul`
  width: 100%;
  margin: 40px 0 0;
  padding: 0 0 0 50px;
`;

export const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const ListItem = styled.li`
  list-style: none;
  margin: 0 0 0 50px;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const Icon = styled.img`
  width: 40px;
  height: 50px;
`;
