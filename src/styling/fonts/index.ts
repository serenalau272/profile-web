import { createGlobalStyle } from "styled-components";

import KumbhSansRegular from './KumbhSans-Regular.ttf';

import KumbhSansLight from './KumbhSans-Light.ttf';

import KumbhSansSemiBold from './KumbhSans-SemiBold.ttf';

import KumbhSansMedium from './KumbhSans-Medium.ttf';

import PoppinsRegular from './Poppins-Regular.ttf';

import PoppinsLight from './Poppins-Light.ttf';

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'KumbhSans-Regular';
        src: url(${KumbhSansRegular}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'KumbhSans-Light';
        src: url(${KumbhSansLight}) format('truetype');
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
        font-family: 'KumbhSans-Medium';
        src: url(${KumbhSansMedium}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Poppins-Regular';
        src: url(${PoppinsRegular}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Poppins-Light';
        src: url(${PoppinsLight}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }
`

export default GlobalFonts;