import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-weight: 400;
        ::-webkit-scrollbar {
            width: 7px;
            height: 7px;
        }
        ::-webkit-scrollbar-thumb {
            background: #FFF6E5;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover{
            background: #FFF6E5;
        }
        ::-webkit-scrollbar-track{
            background: #ffffff;
            border-radius: 10px;
            box-shadow: inset 7px 10px 12px #FFFCF9;
        }
    }

    :root {
        --background-white-600: #FFF6E5;
        --background-white: #FFF;
        --background-gray: #bfbebf;
        --background-black: #000;
        --background-color: #FFFCF9;

        --primary-text-500: #000;
        --primary-text-500-gray: #bfbebf;
        --primary-text-200: rgba(49, 49, 49, 0.8);
        --secondary-text-500: #FF6978;

        --border-gray: rgba(151, 151, 151, 0.2);

        --shadow-input:  5px 5px 80px 0px #D4AD867E;
;
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
        

        border-radius: 0.625rem;
        border: 0;

        background-color: var(--secondary-text-500);
        color: var(--background-white);

        font-family: "sf-pro-display";
        font-size: 1.25rem;
        font-weight: 500;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
    body {
        background-color: var(--background-color);
        overflow: hidden;
    }
    .none {
        display:none;
    }
`;
