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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  padding: 0 15px;

  button {
    align-self: center;
    margin-top: 20px;
  }

  ${({ theme }) => theme.media.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 15px;

    button {
      grid-column: 1 / -1;
      justify-self: center;
    }
  }
`;

export const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.media.desktop} {
    border-radius: 15px;
    transition: background-color 0.1s ease;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin: 0 0 0 20px;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.m};

  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const Icon = styled.img`
  width: 30px;
  height: 35px;

  ${({ theme }) => theme.media.desktop} {
    width: 25px;
    height: 40px;
  }
`;
