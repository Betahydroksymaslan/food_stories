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

export const TypeOfProductWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-height: 95vh;
  overflow-y: scroll;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
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
  align-items: center;
  margin: 20px 0;
  padding: 0 15px;

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

  ${({ theme }) => theme.media.desktop} {
    border-radius: 15px;
    transition: background-color 0.1s ease;
    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.07);
    }
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin: 0 0 0 50px;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.m};

  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 50px;

  ${({ theme }) => theme.media.desktop} {
    width: 25px;
    height: 40px;
  }
`;
