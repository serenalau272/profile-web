import React, { useState } from "react";
import Typewriter from "typewriter-effect";

import {
  HeroContainer,
  HeroH1,
  HeroH2,
  HeroDesk,
  HeroDeskItemsContainer,
  HeroComputer,
  HeroScreenContainer,
  HeroShelf,
  HeroBooks,
  HeroBibleVerse,
  HeroLamp,
  HeroNotePad,
  HeroMouse,
  HeroPencils,
  HeroRubiks,
  HeroShelfContainer,
  HeroClock,
} from "./heroSection";

import heroComputer from "../../resources/heroComputer.png";
import heroDesk from "../../resources/desk.png";
import heroBibleVerse from "../../resources/bibleVerse.png";
import heroBooks from "../../resources/books.png";
import heroLamp from "../../resources/lamp.png";
import heroNotePad from "../../resources/notePad.png";
import heroMouse from "../../resources/mouse.png";
import heroPencils from "../../resources/pencils.png";
import heroRubiks from "../../resources/rubiks.png";
import heroClock from "../../resources/clock.png";

interface IHeroSectionProps {
  onClickScreen: () => void;
}

const HeroSection: React.FC<IHeroSectionProps> = (props: IHeroSectionProps) => {
  return (
    <HeroContainer>
      <HeroDesk src={heroDesk} />
      <HeroDeskItemsContainer>
        <HeroComputer src={heroComputer} />
        <HeroScreenContainer onClick={props.onClickScreen}>
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
        <HeroLamp src={heroLamp} />
        <HeroPencils src={heroPencils} />
        <HeroNotePad src={heroNotePad} />
        <HeroMouse src={heroMouse} />
      </HeroDeskItemsContainer>
      <HeroH2>• Click to zoom •</HeroH2>
      <HeroShelf />
      <HeroShelfContainer>
        <HeroBooks src={heroBooks} />
        <HeroClock src={heroClock} />
        <HeroBibleVerse src={heroBibleVerse} />
        <HeroRubiks src={heroRubiks} />
      </HeroShelfContainer>
    </HeroContainer>
  );
};

export default HeroSection;
