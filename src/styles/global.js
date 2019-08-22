import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

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

  .notification__success {
    background-color: #12DB89;

  }
  .notification__danger {
    background-color: #F95E5A;

  }
  .notification__body {
    padding: 30px;
    font-size: 18px;
  }
`;
