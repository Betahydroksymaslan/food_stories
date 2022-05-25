import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      mainPurple: string;
      mainGreen: string;
      mainYellow: string;
      lightGreen: string;
      secondYellow: string;
      paperYellow: string;
      lightYellow: string;
      mainBGC: string;
      mainBGCLight: string;
      mainDark: string;
      secondColor: string;
      mainColor: string;
      lightGray: string;
      darkYellow: string;
      darkBlue: string;
      lightBlue: string;
      inputBorder: string;
      mainColorLight: string;
      inputBorderLight: string;
      active: string;
      black: string;
      success: string;
      error: string;
      warning: string;
    }

    fontSize: {
      headers: string;
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
      xxs: string;
    }

    boxShadow: {
      mainShadow: string;
      inputShadow: string;
    }

    media: {
      phone: string;
      phoneKeyboard: string;
      tablet: string;
      desktop: string;
    }
  }
}