import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }
  *.focus {
    outline: 0
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    color: #170C3A;
    background: #FCFCFD
  }
  body, input, button {
    font: 20px 'Roboto', sans-serif;

  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none
  }
  button {
    cursor: pointer;
  }

`;
