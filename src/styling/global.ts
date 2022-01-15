import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Poppins-Regular'; 
        margin: 0;
        outline:0;
        padding: 0;
    }
    #root{
        margin:0 auto;
    }
`

export default GlobalStyle;