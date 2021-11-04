import styled from 'styled-components'
import heroWave from '../../resources/heroWave.png';
import { IoIosArrowDropdownCircle, IoIosArrowDown } from 'react-icons/io';
import {Link} from 'react-scroll';

export const HeroContainer = styled.div`
    background: #313131;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
`

export const HeroWaveImg = styled.img`
    top: 0;
    position: absolute;
    width: 100%;
    height: 80%;
    padding: 0;

    @media screen and (max-width: 768px) {
        height: 80%;
    }

    @media screen and (max-width: 480px) {
        height: 40%;
    }
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #553B15;
    text-shadow: 0px 4px 2px #FFE8C5;
    font-size: 55px;
    font-weight: lighter;
    text-align: center;
    position: absolute;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
        color: #FFFFFF;
        text-shadow: 0px 4px 2px #553B15;
    }
`

export const ArrowBtn = styled(Link)`
    bottom: 40px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    white-space: nowrap;
    padding: 12px 30px;
    color: #FFFFFF;
    font-size: 27px;
    outline: none;
    border: none;
    cursor: pointer;
    justify-content: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #FFD28E;
    }
    
`

export const ArrowFilled = styled(IoIosArrowDropdownCircle)`
    margin-top: 5px;
    font-size: 45px;
    color: #FFD28E;
`

export const ArrowEmpty = styled(IoIosArrowDown)`
    margin-top: 5px;
    font-size: 45px;
    color: #FFFFFF;
`