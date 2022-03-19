import styled from "styled-components";

export const AboutContainer = styled.div`
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutScreen = styled.img`
  width: 100%;
  z-index: -1;
`;

export const WindowContainer = styled.div`
  position: absolute;
  height: 78.5%;
  width: 100%;
  margin-top: -23.8vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Column1 = styled.div`
  order: 1;
  width: 38%;
  height: 100%;
`;

export const Column2 = styled.div`
  order 2;
  width: 70%;
  height: 100%;
  padding: 2.5vw 1vw 0vw;
  display: flex;
  flex-direction: column;
`;

export const ProfileImg = styled.img`
  width: 30%;
  top: 8%;
  left: 3.5%;
  z-index: 1;
  position: absolute;
`;

export const ProfileBg = styled.div`
  background: #f4ddb3;
  width: 29.8%;
  height: 83%;
  left: 5%;
  top: 10.5%;
  z-index: 0;
  border-radius: 3%;
  align-self: center;
  position: absolute;
`;

export const AboutP = styled.p`
  color: #585858;
  font-size: 1.4vw;
  font-family: "KumbhSans-Light";
  line-height: 2.3vw;
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
  height: 20%;
  justify-self: stretch;
  align-self: start;
  margin-top: 1.8vh;
  margin-left: 12px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const LinkIcon = styled.div`
  font-size: 3vw;
  cursor: pointer;
`;
