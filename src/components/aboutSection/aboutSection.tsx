import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #857763;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const WindowContainer = styled.div`
  color: #ffffff;
  background: #6f6f6f;
  height: 73vh;
  width: 80vw;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WindowScreen = styled.div`
  background: #ffffff;
  height: 92%;
  width: 96%;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 32% 68%;
  grid-template-rows: 10% 23% 65%;
  grid-template-areas:
    "bar bar"
    "search search"
    "col1 col2";
`;

export const WindowBar = styled.div`
  background: #4a4a4a;
  height: 45px;
  grid-area: bar;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  padding-left: 12px;
`;

interface WindowBarCircleProps {
  colour: string;
}

export const WindowBarCircle = styled.div<WindowBarCircleProps>`
  background: ${(props) => props.colour};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 5px;
`;

export const SearchBar = styled.div`
  background: #6f6f6f;
  width: auto;
  height: 10vh;
  border-radius: 15px;
  font-size: 40px;
  padding: 2vh 35px;
  grid-area: search;
  justify-self: stretch;
  align-self: center;
  margin: 0px 40px;
`;

interface OpacityProps {
  isVisible: boolean;
}

export const Column1 = styled.div<OpacityProps>`
  grid-area: col1;
  width: 22vw;
  height: 100%;
  justify-self: start;
  align-self: center;
  margin: 0px 40px;
  opacity: ${(props) => (props.isVisible ? "100%" : "0")};
  transition: 0.3s ease-in-out;
`;

export const Column2 = styled.div<OpacityProps>`
  grid-area: col2;
  justify-self: stretch;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding-right: 40px;
  opacity: ${(props) => (props.isVisible ? "100%" : "0")};
  transition: 0.3s ease-in-out;
`;

export const ProfileImg = styled.img`
  width: 20vw;
  z-index: 1;
  position: absolute;
`;

export const ProfileBg = styled.div`
  background: #ffd28e;
  width: 20.5vw;
  height: 20.5vw;
  margin-top: 1vh;
  margin-left: 1vh;
  z-index: 0;
  border-radius: 10px;
  align-self: center;
  position: absolute;
`;

export const AboutH1 = styled.h1`
  color: #ffffff;
  font-size: 30px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const AboutP = styled.p`
  color: #585858;
  font-size: 27px;
  text-align: left;
  justify-self: stretch;
  align-self: start;
  margin-left: 15px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const IconsWrapper = styled.div`
  height: 50px;
  justify-self: stretch;
  align-self: start;
  margin-top: 1.8vh;
  margin-left: 12px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const LinkIcon = styled.div`
  font-size: 55px;
  cursor: pointer;
`;

export const SearchButton = styled.div<OpacityProps>`
  background: #ffd28e;
  color: #000000;
  grid-area: col2;
  width: 15vw;
  height: 10vh;
  font-size: 50px;
  border-radius: 10px;
  margin-top: 12%;
  margin-left: 10%;
  z-index: 10;
  text-align: center;
  vertical-align: middle;
  line-height: 10vh;
  opacity: ${(props) => (props.isVisible ? "100%" : "0")};
  animation: fadeIn 3s;
  transition: 0.3s ease-in-out;
`;
