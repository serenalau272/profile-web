import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  ArrowBtn,
  ArrowFilled,
  ArrowEmpty,
  HeroWaveImg,
} from "./heroSection";

import heroWave from "../../resources/heroWave.png";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroWaveImg src={heroWave} />
      <HeroH1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(100)
              .pauseFor(1000)
              .typeString("Hello!")
              .pauseFor(700)
              .typeString(" I'm a software developer.")
              .start();
          }}
        />
      </HeroH1>
      <ArrowBtn
        to="about"
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
      >
        Learn more {hover ? <ArrowFilled /> : <ArrowEmpty />}
      </ArrowBtn>
    </HeroContainer>
  );
};

export default HeroSection;
