import styled from "styled-components";

export const InfoContainer = styled.div`
  background: #a4dbd8;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const InfoComputer = styled.img`
  order: 1;
  width: 77vw;
  height: 49vw;
  margin-top: auto;
  margin-right: 5vw;
`;

export const SectionContainer = styled.div`
  position: absolute;
  width: 64.5vw;
  height: 30vw;
  margin-left: 0.8vw;
  bottom: 15.3vw;
`;

export const NavBar = styled.div`
  position: absolute;
  width: 50vw;
  height: 4.5vw;
  bottom: 5.5vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5vw;
`;

export const HomeLogo = styled.text`
  color: #484848;
  opacity: 90%;
  text-shadow: 0.13vw 0.2vw 0.08vw #eca96d;
  font-family: "Poppins-Light";
  font-weight: bolder;
  font-size: min(3.7vw, 640%);
  text-align: center;
  width: 5.5vw;
  cursor: pointer;
`;
