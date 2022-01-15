import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import {
  HeroContainer,
  HeroH1,
  ArrowBtn,
  ArrowFilled,
  ArrowEmpty,
  HeroTable,
  HeroComputer,
  HeroScreenContainer,
  HeroBinder,
  HeroMug,
  HeroPlant,
  HeroH2,
  HeroNotePad,
} from "./heroSection";

import heroComputer from "../../resources/heroComputer.png";
import heroBinder from "../../resources/binders.png";
import heroPlant from "../../resources/plant.png";
import heroMug from "../../resources/mug.png";
import heroNotePad from "../../resources/notePad.png";

const HeroSection = () => {
  const [section, setSection] = useState(true);

  const onClickScreen = () => {};

  // const onHover = () => {
  //   setHover(!hover);
  // };

  enum Section {
    About = "about",
    Projects = "projects",
    Experience = "experience",
    Contact = "contact",
    Default = "",
  }

  const navTo = (section: Section) => {};

  return (
    <HeroContainer id="home">
      <HeroTable />
      <HeroBinder src={heroBinder} />
      <HeroMug src={heroMug} />
      <HeroPlant src={heroPlant} />
      <HeroNotePad src={heroNotePad} />
      <HeroComputer src={heroComputer} />
      <HeroH2>• Click to zoom •</HeroH2>
      <HeroScreenContainer>
        <HeroH1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(100)
                .pauseFor(1000)
                .typeString("Hello!")
                .pauseFor(700)
                .typeString(" I'm a software engineer.")
                .start();
            }}
          />
        </HeroH1>
      </HeroScreenContainer>

      {/* <ArrowBtn
        to="about"
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
      >
        Learn more {hover ? <ArrowFilled /> : <ArrowEmpty />}
      </ArrowBtn> */}
    </HeroContainer>
  );
};

export default HeroSection;
