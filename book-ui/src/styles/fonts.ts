import { createGlobalStyle } from "styled-components";
import SfProDisplayBoldTTF from "../assets/fonts/sfprodisplay-bold.ttf";
import SfProDisplayBoldWOFF from "../assets/fonts/sfprodisplay-bold.woff";
import SfProDisplayBoldWOFF2 from "../assets/fonts/sfprodisplay-bold.woff2";
import SfProDisplayMediumTTF from "../assets/fonts/sfprodisplay-medium.ttf";
import SfProDisplayMediumWOFF from "../assets/fonts/sfprodisplay-medium.woff";
import SfProDisplayMediumWOFF2 from "../assets/fonts/sfprodisplay-medium.woff2";
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

    @font-face{
        font-family: 'sf-pro-display';
        src: url(${SfProDisplayMediumWOFF2}) format('woff2'),
             url(${SfProDisplayMediumWOFF})  format('woff'),
             url(${SfProDisplayMediumTTF})   format('ttf');
        font-weight: 500;
        font-style: normal;
    }


    @font-face{
        font-family: 'sf-pro-display';
        src: url(${SfProDisplayBoldWOFF2}) format('woff2'),
             url(${SfProDisplayBoldWOFF})  format('woff'),
             url(${SfProDisplayBoldTTF})   format('ttf');
        font-weight: 900;
        font-style: normal;
    }
`;
