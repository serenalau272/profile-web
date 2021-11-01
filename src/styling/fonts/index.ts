import { createGlobalStyle } from "styled-components";

import Quantico from './Quantico-Regular.ttf';

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Quantico-Regular';
        src: url(${Quantico}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }
`

export default GlobalFonts;