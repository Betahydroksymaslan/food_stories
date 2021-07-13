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
`;
