import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'assets/styles/font.css';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: #e74c3c;
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-toast-width: 320px;
  --toastify-toast-background: #fff;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;

  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;
  }
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

.Toastify__toast-container--top-center {
  @media (max-width: 600px) {
    width: 90%;
    
    margin-top: 10px;
    transform: translateX(5%)
  }
}
.Toastify__toast {
  @media (max-width: 600px) {
    border-radius: 8px;
  }
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
.ReactModal__Overlay.ReactModal__Overlay--after-open {
    z-index: 1000;
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
