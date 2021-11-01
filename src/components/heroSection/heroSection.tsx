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

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const HeroWaveWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const HeroWaveImg = styled.img`
    width: 100%auto;
    margin: 0 0 0 10px;
    padding: 0;
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
    color: #FFFFFF;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const ArrowBtn = styled(Link)`
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    white-space: nowrap;
    padding: 12px 30px;
    color: #FFFFFF;
    font-size: 25px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #FFD28E;
    }
    
`

export const ArrowFilled = styled(IoIosArrowDropdownCircle)`
    margin-top: 10px;
    font-size: 45px;
    color: #FFD28E;
`

export const ArrowEmpty = styled(IoIosArrowDown)`
    margin-top: 10px;
    font-size: 45px;
    color: #FFFFFF;
`