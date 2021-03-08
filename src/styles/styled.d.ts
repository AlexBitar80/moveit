import 'styled-components';

interface Theme {
  title: string;
  colors: {
    box: string;
    background: string;
    grayLine: string;
    text: string;
    title: string;
    primaryRed: string;
    primaryGreen: string;
    blueDark: string;
    blueTwitter: string;
  };

  grandient: {
    background: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
