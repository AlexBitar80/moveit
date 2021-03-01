import 'styled-componets';

interface Theme {
  title: string;
  colors: {
    box: string;
    background: string;
    grayLine: string;
    text: string;
    title: string;
    primaryRed: string;
    redHover: string;
    primaryGreen: string;
    greenHover: string;
    blueDark: string;
    blueTwitter: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
