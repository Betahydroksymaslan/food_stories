import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'assets/styles/font.css';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
  }
  *, *::after, *::before {
    box-sizing: inherit;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.colors.mainDark};
  }
  a, button {
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  h1 {
    font-size: 30px;
    font-weight: 300;
    margin: 0;
  }
.Toastify__toast--error {
  background: #dd7777;
}
.Toastify__toast--success {
  background: #77dd77;
}
.ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
}
.ReactModal__Overlay--after-open{
    opacity: 1;
}
.ReactModal__Overlay--before-close{
    opacity: 0;
}
::-webkit-scrollbar{
width: 6px;
height: 4px;
}
::-webkit-scrollbar-thumb{
background: #DBDBDB;
border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover{
background: #B3AFB3;
}
::-webkit-scrollbar-track{
background: transparent;
}
`;
