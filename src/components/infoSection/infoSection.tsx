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
  max-width: 92%;
  max-height: 97%;
  margin-top: auto;
  margin-right: 5vw;
`;

export const NavBar = styled.div`
  position: absolute;
  width: 50vw;
  height: 5vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 5.8vw;
  margin-left: 0.5vw;
  /* border: 1px solid blue; */
`;

export const HomeLogo = styled.text`
  order: 1;
  color: #484848;
  opacity: 90%;
  text-shadow: 0.13vw 0.2vw 0.08vw #eca96d;
  font-family: "Poppins-Regular";
  font-size: 3.7vw;
  cursor: pointer;
`;
