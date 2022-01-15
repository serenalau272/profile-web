import { createGlobalStyle } from "styled-components";

import Poppins from './Poppins-Regular.ttf';

import PoppinsItalic from './Poppins-Italic.ttf'

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Poppins-Regular';
        src: url(${Poppins}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Poppins-Italic';
        src: url(${PoppinsItalic}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }
`

export default GlobalFonts;