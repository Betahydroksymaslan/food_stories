import { theme } from 'assets/styles/theme';
import styled from 'styled-components';

export const IconWrapper = styled.div`
  width: 55px;
  position: absolute;
  top: 40px;
  left: 30px;
  svg {
    width: 100%;
    height: 28px;
  }
  ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;

export const SearchWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: scroll;
  transform-origin: top;
  background-color: ${({ theme }) => theme.colors.inputBorder};
  transition: transform 0.3s ease-in-out;
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.media.desktop} {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    transform: translateY(0);
    height: auto;
    border-bottom: 1px solid ${({ theme }) => theme.colors.inputBorder};
    background-color: transparent;
    overflow-y: hidden;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const SearchInput = styled.input`
  margin: 100px 0;
  width: 70%;
  max-width: 420px;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  outline: none;
  color: ${({ theme }) => theme.colors.mainDark};
  padding: 10px 0 10px 20px;
  box-shadow: ${({ theme }) => theme.boxShadow.inputShadow};
  &::placeholder {
    color: ${({ theme }) => theme.colors.inputBorder};
    font-weight: 300;
  }
  ${({ theme }) => theme.media.desktop} {
    margin: 0;
    width: 50%;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const StatusInfo = styled.div`
  display: none;
  ${({ theme }) => theme.media.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ isBold }) => (isBold ? '600' : '400')};
`;
