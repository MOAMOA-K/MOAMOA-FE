import { css } from '@emotion/react';

export const GlobalResetStyle = css`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  * {
    margin: 0;
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button,
  input,
  optgroup,
  select {
    all: unset;
  }
  button {
    cursor: pointer;
  }
`;
