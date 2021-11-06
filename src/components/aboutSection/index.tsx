import React from "react";
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import {
  AboutContainer,
  WindowContainer,
  WindowScreen,
  WindowBar,
  Column1,
  Column2,
  AboutH1,
  AboutP,
  WindowBarCircle,
  SearchBar,
  ProfileImg,
  ProfileBg,
  IconsWrapper,
  LinkIcon,
} from "./aboutSection";

import profile from "../../resources/profile.jpg";
const iconStyle = { color: "#6F6F6F" };
const AboutSection = () => {
  return (
    <>
      <AboutContainer id="about">
        <WindowContainer>
          <WindowScreen>
            <WindowBar>
              <WindowBarCircle colour="#FF6D6D" />
              <WindowBarCircle colour="#FFD28E" />
              <WindowBarCircle colour="#4EDE5C" />
            </WindowBar>
            <SearchBar>Serena Lau</SearchBar>
            <Column1>
              <ProfileImg src={profile} />
              <ProfileBg />
            </Column1>
            <Column2>
              <AboutP>
                I'm a curious and enthusiastic software engineering
                undergraduate student from The University of Auckland with a
                keen passion for innovative solutions in the technological
                engineering context. I love new challenges that push me to grow,
                learn more and expand my skill set and experience.
              </AboutP>
              <IconsWrapper>
                <LinkIcon>
                  <FaLinkedin onClick ={() => window.open('https://www.linkedin.com/in/serena-lau-2166111a0/', '_blank')} style={iconStyle} />
                </LinkIcon>
                <LinkIcon>
                  <FaGithubSquare onClick ={() => window.open('https://github.com/serenalau272', '_blank')} style={iconStyle} />
                </LinkIcon>
                <LinkIcon>
                  <FaFacebookSquare onClick ={() => window.open('https://www.facebook.com/serena.lau.351/', '_blank')} style={iconStyle} />
                </LinkIcon>
              </IconsWrapper>
            </Column2>
          </WindowScreen>
        </WindowContainer>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
