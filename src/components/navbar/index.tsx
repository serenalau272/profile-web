import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import pageWave from '../../resources/media/pageWave.png'
import {
  Nav,
  NavbarContainer,
  NavWave,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBorder,
} from './navbar'

interface NavbarProps {
  toggle: () => void
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 200) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  enum Section {
    About = 'about',
    Projects = 'projects',
    Experience = 'experience',
    Contact = 'contact',
    Default = '',
  }

  const [border, setBorder] = useState(false)
  const [active, setActive] = useState(false)
  const [section, setSection] = useState(Section.Default)

  const onActive = (isEnable: boolean, section: Section) => {
    setSection(section)
    setBorder(isEnable)
    setActive(isEnable)
  }

  const onHover = (isEnable: boolean, section: Section) => {
    setSection(section)
    if (isEnable) {
      setBorder(isEnable)
    } else {
      active ? setBorder(border) : setBorder(isEnable)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo onClick={toggleHome}>serena lau</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onClick={() => onActive(true, Section.About)}
                onSetActive={() => onActive(true, Section.About)}
                onSetInactive={() => onActive(false, Section.About)}
                onMouseEnter={() => onHover(true, Section.About)}
                onMouseLeave={() => onHover(false, Section.About)}
              >
                About me
              </NavLinks>
              {border && section === Section.About ? (
                <NavBorder section={Section.About} />
              ) : null}
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onClick={() => onActive(true, Section.Projects)}
                onSetActive={() => onActive(true, Section.Projects)}
                onSetInactive={() => onActive(false, Section.Projects)}
                onMouseEnter={() => onHover(true, Section.Projects)}
                onMouseLeave={() => onHover(false, Section.Projects)}
              >
                Projects
              </NavLinks>
              {border && section === Section.Projects ? (
                <NavBorder section={Section.Projects} />
              ) : null}
            </NavItem>
            <NavItem>
              <NavLinks
                to="experience"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onClick={() => onActive(true, Section.Experience)}
                onSetActive={() => onActive(true, Section.Experience)}
                onSetInactive={() => onActive(false, Section.Experience)}
                onMouseEnter={() => onHover(true, Section.Experience)}
                onMouseLeave={() => onHover(false, Section.Experience)}
              >
                Experience
              </NavLinks>
              {border && section === Section.Experience ? (
                <NavBorder section={Section.Experience} />
              ) : null}
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onClick={() => onActive(true, Section.Contact)}
                onSetActive={() => onActive(true, Section.Contact)}
                onSetInactive={() => onActive(false, Section.Contact)}
                onMouseEnter={() => onHover(true, Section.Contact)}
                onMouseLeave={() => onHover(false, Section.Contact)}
              >
                Contact
              </NavLinks>
              {border && section === Section.Contact ? (
                <NavBorder section={Section.Contact} />
              ) : null}
            </NavItem>
          </NavMenu>
        </NavbarContainer>
        <NavWave src={pageWave} />
      </Nav>
    </>
  )
}

export default Navbar
