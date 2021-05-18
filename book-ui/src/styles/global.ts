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
        --background-color: "#FEFAF6";
        --background-white: "#FFF"
        --primary-text:"#54565A"
        --secondary-text: "#FF6978"
        
    }

    h1,h2,h3,h4,h5,h6{
        font-weight: 700;
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
    
`;

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-color: var(--background-color);
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`;

export { GlobalStyle, MainContainer };
