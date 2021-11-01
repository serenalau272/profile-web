import styled from 'styled-components'

export const AboutContainer = styled.div`
    background: #313131;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const WindowContainer = styled.div`
    color: #FFFFFF;
    background: #6F6F6F;
    height: 70vh;
    width: 80vw;
    border-radius: 10px;
    margin-bottom: 10px;
`

export const WindowScreen = styled.div`
    background: #FFFFFF;
`

export const AboutH1 = styled.h1`
    color: #FFFFFF;
    font-size: 30px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }

    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`

export const AboutP = styled.p`
    margin-top: 24px;
    color: #585858;
    font-size: 20px;
    text-align: left;
    max-width: 400px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 10px;
    }
`