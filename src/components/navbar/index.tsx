import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBorder,
} from "./navbar";

interface NavbarProps {
  toggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  enum Section {
    Home = "home",
    About = "about",
    Projects = "projects",
    Experience = "experience",
    Contact = "contact",
  }

  const [border, setBorder] = useState(false);
  const [active, setActive] = useState(false);
  const [section, setSection] = useState(Section.Home);

  const onActive = (isEnable: boolean, section: Section) => {
    setSection(section);
    setBorder(isEnable);
    setActive(isEnable);
  };

  const onHover = (isEnable: boolean, section: Section) => {
    setSection(section);
    if (isEnable) {
      setBorder(isEnable);
    } else {
      active ? setBorder(border) : setBorder(isEnable);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

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
                onSetActive={() => onActive(true, Section.About)}
                onSetInactive={() => onActive(false, Section.About)}
                onMouseEnter={() => onHover(true, Section.About)}
                onMouseLeave={() => onHover(false, Section.About)}
              >
                {border && section == Section.About ? <NavBorder /> : null}About me
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onSetActive={() => onActive(true, Section.Projects)}
                onSetInactive={() => onActive(false, Section.Projects)}
                onMouseEnter={() => onHover(true, Section.Projects)}
                onMouseLeave={() => onHover(false, Section.Projects)}
              >
                {border && section == Section.Projects ? <NavBorder /> : null}Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="experience"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onSetActive={() => onActive(true, Section.Experience)}
                onSetInactive={() => onActive(false, Section.Experience)}
                onMouseEnter={() => onHover(true, Section.Experience)}
                onMouseLeave={() => onHover(false, Section.Experience)}
              >
                {border && section == Section.Experience ? <NavBorder /> : null}
                Experience
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onSetActive={() => onActive(true, Section.Contact)}
                onSetInactive={() => onActive(false, Section.Contact)}
                onMouseEnter={() => onHover(true, Section.Contact)}
                onMouseLeave={() => onHover(false, Section.Contact)}
              >
                {border && section == Section.Contact ? <NavBorder /> : null}Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
