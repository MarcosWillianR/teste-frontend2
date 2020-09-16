import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
    color: #2D3748;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;
