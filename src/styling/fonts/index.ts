import { createGlobalStyle } from "styled-components";

import KumbhSansRegular from './KumbhSans-Regular.ttf';

import KumbhSansSemiBold from './KumbhSans-SemiBold.ttf';

import PoppinsRegular from './Poppins-Regular.ttf';

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'KumbhSans-Regular';
        src: url(${KumbhSansRegular}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'KumbhSans-SemiBold';
        src: url(${KumbhSansSemiBold}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Poppins-Regular';
        src: url(${PoppinsRegular}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }
`

export default GlobalFonts;