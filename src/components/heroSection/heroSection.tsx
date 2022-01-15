import styled from "styled-components";
import heroWave from "../../resources/heroWave.png";
import { IoIosArrowDropdownCircle, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";

export const HeroContainer = styled.div`
  background: #857763;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const HeroTable = styled.div`
  background: #eaeaea;
  width: 100vw;
  height: 30vh;
  position: absolute;
  bottom: 0;
`;

export const HeroComputer = styled.img`
  position: absolute;
  bottom: 80px;
  width: 50%;
  height: 75vh;

  @media screen and (max-width: 768px) {
    height: 80%;
  }

  @media screen and (max-width: 480px) {
    height: 40%;
  }
`;

export const HeroScreenContainer = styled.div`
  position: absolute;
  top: 25vh;
  left: 30vw;
`;

export const HeroH1 = styled.h1`
  color: #553b15;
  text-shadow: 0px 4px 2px #ffe8c5;
  font-size: 40px;
  font-weight: lighter;
  text-align: center;
  position: absolute;
  width: 40vw;

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
  color: #f9f9f9;
  opacity: 60%;
  font-size: 22px;
  font-weight: lighter;
  font-style: italic;
  text-align: center;
  position: absolute;
  width: 40vw;
  top: 9vh;
  left: 15vw;
`;
export const HeroBinder = styled.img`
  position: absolute;
  bottom: 170px;
  right: 30px;
  width: 20%;
  height: 33vh;
`;

export const HeroPlant = styled.img`
  position: absolute;
  bottom: 190px;
  left: 170px;
  width: 20%;
  height: 33vh;
`;

export const HeroMug = styled.img`
  position: absolute;
  bottom: 140px;
  right: 245px;
  width: 10%;
  height: 20vh;
`;

export const HeroNotePad = styled.img`
  position: absolute;
  bottom: 80px;
  left: 100px;
  width: 15%;
  height: 20vh;
`;

export const ArrowBtn = styled(Link)`
  bottom: 40px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  white-space: nowrap;
  padding: 12px 30px;
  color: #ffffff;
  font-size: 27px;
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ffd28e;
  }
`;

export const ArrowFilled = styled(IoIosArrowDropdownCircle)`
  margin-top: 5px;
  font-size: 45px;
  color: #ffd28e;
`;

export const ArrowEmpty = styled(IoIosArrowDown)`
  margin-top: 5px;
  font-size: 45px;
  color: #ffffff;
`;
