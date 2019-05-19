import { createGlobalStyle } from "styled-components/macro"

import "./normalize.css"

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    box-sizing: inherit;
    outline: inherit;
  }

  html {
    box-sizing: border-box;
    outline: none;
  }

  body {
    color: ${({ theme }) => theme.colors.EERIE_BLACK};
    background: ${({ theme }) => theme.colors.PLATINUM};
    font-family: ${({ theme }) =>
      `${theme.font.family.primary}, ${theme.font.family.backup}`};
    font-size: ${({ theme }) => theme.font.size.m};
    margin: 0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    overflow-y: scroll;
  }

  a {
    text-decoration: none;
    cursor: pointer
  }

  button {
    background: inherit;
    border: 0;
    font-size: 100%;
    font-family: inherit;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  li, ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }
`
