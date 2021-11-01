import React from "react";
import { AboutContainer, WindowContainer, AboutH1, AboutP } from "./aboutSection";

const AboutSection = () => {
  return (
    <>
      <AboutContainer id='about'>
        <WindowContainer>
          <AboutH1>Serena Lau</AboutH1>
          <AboutP>
            I'm a curious and enthusiastic software engineering undergraduate
            student from The University of Auckland
          </AboutP>
        </WindowContainer>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
