import { createGlobalStyle } from 'styled-components'

import KumbhSansRegular from './KumbhSans-Regular.ttf'

import KumbhSansLight from './KumbhSans-Light.ttf'

import KumbhSansSemiBold from './KumbhSans-SemiBold.ttf'

import KumbhSansMedium from './KumbhSans-Medium.ttf'

import KumbhSansBold from './KumbhSans-Bold.ttf'

import PoppinsSemiBold from './Poppins-SemiBold.ttf'

import PoppinsMedium from './Poppins-Medium.ttf'

import PoppinsItalic from './Poppins-Italic.ttf'

import PoppinsRegular from './Poppins-Regular.ttf'

import PoppinsLight from './Poppins-Light.ttf'

import PoppinsExtraLight from './Poppins-ExtraLight.ttf'

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
        font-family: 'KumbhSans-Medium';
        src: url(${KumbhSansMedium}) format('truetype');
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
        font-family: 'KumbhSans-Bold';
        src: url(${KumbhSansBold}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Poppins-SemiBold';
        src: url(${PoppinsSemiBold}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Poppins-Medium';
        src: url(${PoppinsMedium}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Poppins-Italic';
        src: url($PoppinsItalic}) format('truetype');
        font-weight: 200;
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

    @font-face {
        font-family: 'Poppins-ExtraLight';
        src: url(${PoppinsExtraLight}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }
`

export default GlobalFonts
