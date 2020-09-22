import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding : 0;
    margin: 0;
    box-sizing : border-box;
    font-family: 'Raleway', sans-serif;
    
  }
  body {
    width: 100%;
    height : 100vh;
    background-color: #F6F6F6;
    overflow: none;
  }

  a , span {
    display: inline-block;
  }

  a {
    text-decoration: none;
  }

  button , input {
    border: none;
    outline: none;
    cursor: pointer;
  }

`;

export default GlobalStyles;
