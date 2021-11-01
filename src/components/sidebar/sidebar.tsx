import styled, {StyledFunction} from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-router-dom'
import React from 'react'

export interface SidebarContainerProps {
    isOpen: boolean;
    onClick: () => void;
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0D0D0D;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${props =>  props.isOpen ? '100%' : '0'};
    top: ${props => props.isOpen ? '0' : '-100%'};
`

export const CloseIcon = styled(FaTimes)`
    color: #FFFFFF;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #FFFFFF;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat()(6,60px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #FFFFFF;
    cursor: pointer;

    &:hover {
        color: #F49A11;
        transition: 0.2s ease-in-out
    }
`