import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #010F30;
    --secondary: #29AAE0;
    --lightBlue: #010F30;
    --black: #2E2E2E;
    --white: #fff;
    --grey: #E6EDF1;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
 }

  img {
    max-width: 100%;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default GlobalStyles;
