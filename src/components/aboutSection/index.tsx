import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

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
  SearchButton,
} from "./aboutSection";

import profile from "../../resources/profile.jpg";
const iconStyle = { color: "#6F6F6F" };

const AboutSection = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(true);

  const onButtonClick = () => {
    setIsButtonVisible(false);
    setIsContentVisible(true);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

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
            {/* <SearchButton
              onClick={onButtonClick}
              isVisible={isButtonVisible}
            >
              SEARCH
            </SearchButton> */}
            <Column1 data-aos="fade-zoom-in" isVisible={isContentVisible}>
              <ProfileImg src={profile} />
              <ProfileBg />
            </Column1>

            <Column2 data-aos="fade-zoom-in" isVisible={isContentVisible}>
              <AboutP>
                I'm a curious and enthusiastic software engineering
                undergraduate student from The University of Auckland with a
                keen passion for innovative solutions in the technological
                engineering context. I love new challenges that push me to grow,
                learn more and expand my skill set and experience.
              </AboutP>
              <IconsWrapper>
                <LinkIcon>
                  <FaLinkedin
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/serena-lau-2166111a0/",
                        "_blank"
                      )
                    }
                    style={iconStyle}
                  />
                </LinkIcon>
                <LinkIcon>
                  <FaGithubSquare
                    onClick={() =>
                      window.open("https://github.com/serenalau272", "_blank")
                    }
                    style={iconStyle}
                  />
                </LinkIcon>
                <LinkIcon>
                  <FaFacebookSquare
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/serena.lau.351/",
                        "_blank"
                      )
                    }
                    style={iconStyle}
                  />
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
