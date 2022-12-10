import styled from 'styled-components'

export const AboutContainer = styled.div`
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const AboutScreen = styled.img`
  width: 100%;
  z-index: -1;
`

export const WindowContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export const Column1 = styled.div`
  order: 1;
  width: 38%;
  height: 100%;
  position: relative;
`

export const Column2 = styled.div`
  order 2;
  width: 70%;
  height: 100%;
  padding: 2.5vw 1vw 0vw;
  display: flex;
  flex-direction: column;
`

export const ProfileImg = styled.img`
  width: 85%;
  top: 8%;
  left: 10%;
  z-index: 1;
  position: relative;
`

export const ProfileBg = styled.div`
  background: #f4ddb3;
  width: 86%;
  height: 82%;
  left: 13%;
  top: 12%;
  z-index: 0;
  border-radius: 2.5%;
  align-self: center;
  position: absolute;
`

export const AboutP = styled.p`
  color: #585858;
  font-size: 1.4vw;
  font-family: 'KumbhSans-Light';
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
`

export const IconsWrapper = styled.div`
  height: 20%;
  justify-self: stretch;
  align-self: start;
  margin-top: 1.8vh;
  margin-left: 12px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const LinkIcon = styled.div`
  font-size: 3vw;
  cursor: pointer;
`
