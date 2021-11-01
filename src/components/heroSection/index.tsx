import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  ArrowBtn,
  ArrowFilled,
  ArrowEmpty,
} from "./heroSection";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg></HeroBg>
      <HeroContent>
        <HeroH1>Hello! I'm a software developer.</HeroH1>
        <ArrowBtn to="about" onMouseEnter={onHover} onMouseLeave={onHover}>
          Learn more {hover ? <ArrowFilled /> : <ArrowEmpty />}
        </ArrowBtn>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
