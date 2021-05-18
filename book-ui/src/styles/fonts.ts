import { createGlobalStyle } from "styled-components";
import SfProDisplayTTF from "../assets/fonts/sfprodisplay.ttf";
import SfProDisplayWOFF from "../assets/fonts/sfprodisplay.woff";
import SfProDisplayWOFF2 from "../assets/fonts/sfprodisplay.woff2";
import SfProTextTTF from "../assets/fonts/sfprotext.ttf";
import SfProTextWOFF from "../assets/fonts/sfprotext.woff";
import SfProTextWOFF2 from "../assets/fonts/sfprotext.woff2";

export const FontFace = createGlobalStyle`
    @font-face {
        font-family: 'sf-pro-text';
        src: url(${SfProTextWOFF2}) format('woff2'),
             url(${SfProTextWOFF})  format('woff'),
             url(${SfProTextTTF})   format('ttf');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'sf-pro-display';
        src: url(${SfProDisplayWOFF2}) format('woff2'),
             url(${SfProDisplayWOFF})  format('woff'),
             url(${SfProDisplayTTF})   format('ttf');
        font-weight: 400;
        font-style: normal;
    }
`;
