import React from 'react'
import { FaToggleOff } from 'react-icons/fa'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarContainerProps} from './sidebar'

interface SidebarProps {
    isOpen: boolean;
    toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    isOpen,
    toggle
}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About me
                    </SidebarLink>
                    <SidebarLink to="projects">
                        Projects
                    </SidebarLink>
                    <SidebarLink to="experience">
                        Experience
                    </SidebarLink>
                    <SidebarLink to="contact">
                        Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
