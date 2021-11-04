import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

interface NavProps {
    scrollNav: boolean;
}

export const Nav = styled.nav<NavProps>`
    background: #FFD28E;
    height: 80px;
    margin-top: -80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 40px 90px;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
        padding: 25px 90px;
    }

    @media screen and (max-width: 480px) {
        padding: 20px 45px;
    }
`

export const NavWave = styled.img`
    top: 80px;
    justify-self: flex-start;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0;

    @media screen and (max-width: 768px) {
        height: 70%;
    }

    @media screen and (max-width: 480px) {
        height: 50%;
    }
`

export const NavLogo = styled.div`
    color: #000000;
    justify-self: flex-start;
    margin-top: 5px;
    cursor: pointer;
    font-family: 'Quantico-Regular';
    font-size: 3rem;
    text-shadow: 2px 3px 1px #F49A11;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

interface NavLinksProps {
    onSetActive?: () => void;
    border?: boolean;
}

export const NavLinks = styled(LinkS)<NavLinksProps>`
    color: #000000;
    font-size: 20px;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    margin-top: 35px;
    z-index: 1;
   
    /* &.active {
        border-bottom: 10px solid #F49A11;
    }

    &:hover {
        border-bottom: 10px solid #F49A11;
    }   */
`

const handleSectionType = (section: string) => {
    switch (section) {
        // returns array of (width, margin-left)
        case "about":
            return "90px";
        case "projects":
            return "78px";
        case "experience":
            return "101px";
        case "contact":
            return "75px";
        default:
            return "0px";
    }
}

interface NavBorderProps {
    section: string;
}

export const NavBorder = styled.div<NavBorderProps>`
    background: #F49A11;
    height: 12px;
    width: ${props => handleSectionType(props.section)};
    cursor: pointer;
    margin-left: 6px;
    margin-bottom: -35px;
    position: absolute;
    z-index: 0;
 
`