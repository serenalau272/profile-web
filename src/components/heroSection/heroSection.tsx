import styled from "styled-components";
import { Link } from "react-scroll";

interface VisibilityProps {
  isVisible: boolean;
}

export const HeroH1 = styled.h1`
  color: #ffffff;
  text-shadow: 0px 4px 2px rgba(220, 144, 76, 0.43);
  font-size: 2.2vw;
  font-weight: lighter;
  text-align: center;
  position: relative;
  margin: auto;
  width: 80%;
  height: 100%;
  padding-top: 1.9vw;

  @media screen and (max-width: 1500px) {
    font-size: 2.5vw;
    padding-top: 2.1vw;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    color: #ffffff;
    text-shadow: 0px 4px 2px #553b15;
  }
`;

export const HeroH2 = styled.h2`
  color: #6a6a6a;
  opacity: 80%;
  font-size: 1.5vw;
  font-weight: lighter;
  font-style: italic;
  text-align: center;
  order: 3;
  align-self: flex-start;
  margin-left: 22vw;
  margin-top: -3vw;
  margin-bottom: 0.5vw;
  width: 40vw;

  @media screen and (max-width: 1500px) {
    margin-left: 19.5vw;
  }
`;

export const HeroContainer = styled.div`
  background: #a4dbd8;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const HeroDesk = styled.img`
  order: 1;
  align-self: center;
  width: 93vw;
  z-index: 10;
`;

export const HeroDeskItemsContainer = styled.div`
  order: 2;
  align-self: center;
  justify-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-left: -7vw;
`;

export const HeroComputer = styled.img`
  order: 4;
  width: 30vw;
  margin-left: -5vw;

  @media screen and (max-width: 1500px) {
    width: 34vw;
  }
`;

export const HeroLamp = styled.img`
  order: 1;
  width: 15vw;
  margin-bottom: -1vw;
  margin-right: 6vw;
  margin-left: -3vw;
`;

export const HeroPencils = styled.img`
  order: 2;
  width: 4vw;
  margin-right: -3vw;
  z-index: 9;
`;

export const HeroNotePad = styled.img`
  order: 3;
  width: 4vw;
  margin-bottom: -0.2vw;
  margin-left: 2vw;
  z-index: 11;
`;

export const HeroMouse = styled.img`
  order: 6;
  width: 4.8vw;
  margin-left: 8vw;
  margin-bottom: -0.5vw;
`;

export const HeroScreenContainer = styled.div`
  order: 5;
  width: 28.6vw;
  height: 14.8vw;
  margin-left: -29.2vw;
  margin-bottom: 7.6vw;
  cursor: pointer;

  @media screen and (max-width: 1500px) {
    width: 32.5vw;
    height: 16.8vw;
    margin-left: -33.2vw;
    margin-bottom: 8.6vw;
  }
`;

export const HeroShelf = styled.div`
  order: 3;
  align-self: flex-end;
  margin-right: 10vw;
  margin-bottom: auto;
  top: 0%;
  background: #857763;
  width: 28vw;
  border-radius: 3px;
  min-height: 1.5vw;
`;

export const HeroShelfContainer = styled.div`
  order: 4;
  align-self: flex-end;
  margin-right: 10vw;
  width: 28vw;
  min-height: 11vw;
  display: flex;
  flex-direction: row;
`;

export const HeroBooks = styled.img`
  order: 1;
  align-self: flex-end;
  margin-left: 2.5vw;
  width: 7vw;
`;

export const HeroClock = styled.img`
  order: 2;
  align-self: flex-end;
  margin-left: 0.5vw;
  margin-bottom: -0.2vw;
  width: 7vw;
  z-index: 1;
`;

export const HeroBibleVerse = styled.img`
  order: 3;
  align-self: flex-end;
  margin-left: -1.5vw;
  height: 11vw;
  cursor: pointer;
`;

export const HeroRubiks = styled.img`
  order: 4;
  align-self: flex-end;
  margin-left: -1.5vw;
  width: 2.8vw;
`;
