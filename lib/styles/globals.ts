import { css } from '@emotion/react';
import { defaultTheme } from './themes';

export const globalStyles = css`
  * {
    box-sizing: border-box;
    overflow: hidden;
  }
  html {
    overflow-y: auto;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${defaultTheme.colors.white};
    color: ${defaultTheme.colors.black};
  }
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  button {
    border: none;
    outline: none;
  }
`;
