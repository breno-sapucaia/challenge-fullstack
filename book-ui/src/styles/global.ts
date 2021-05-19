import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-weight: 400;
    }

    :root {
        --background-color: #FFF6E5;
        --background-white: #FFF;
        --primary-text-500: #000;
        --primary-text-200: rgba(49, 49, 49, 0.8);
        --secondary-text-500: #FF6978;
        
    }

    h1, h2, h3, h4, h5, h6{
        font-weight: 700;
    }

    input {
        color: var(--primary-text);
        border:0;
        outline:0;
        line-height:1.5px;
        ::placeholder{
            opacity:1;
            color: var(--placeholder);
        }
    }

    button{ 
        cursor: pointer;
        outline: 0;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
    body {
        background-color: var(--background-color);
    }
`;

const MainContainer = styled.main`
  width: 375px;
  margin: 0 auto;
  padding-top: 3.125rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 375px) {
    width: initial;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

export { GlobalStyle, MainContainer };
