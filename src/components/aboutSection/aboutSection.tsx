import styled from 'styled-components'

export const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: #ebe4da;
`

export const Column1 = styled.div`
  width: 38%;
  height: 100%;
  position: relative;
`

export const Column2 = styled.div`
  width: 70%;
  height: 100%;
  padding: min(5.5vw, 9vh) min(3vw, 2.9vh) 0vw min(0.5vw, 0.8vh);
  display: flex;
  flex-direction: column;
`

export const ProfileImg = styled.img`
  width: min(22.3vw, 36.5vh);
  top: 12%;
  left: 10%;
  z-index: 1;
  position: relative;
`

export const ProfileBg = styled.div`
  background: #a4dbd8;
  width: min(22.5vw, 37.1vh);
  height: min(23vw, 37.8vh);
  left: 12.8%;
  top: 13%;
  z-index: 0;
  border-radius: 1.8%;
  align-self: center;
  position: absolute;
`

export const AboutP = styled.p`
  color: #585858;
  font-size: min(1.7vw, 2.8vh);
  font-family: 'KumbhSans-Light';
  line-height: min(2.8vw, 4.6vh);
  text-align: left;
  justify-self: stretch;
  align-self: start;
  margin-left: 0vw;
`

export const IconsWrapper = styled.div`
  justify-self: stretch;
  align-self: start;
  margin-top: 2%;
  margin-left: -0.2vw;
  display: flex;
  flex-direction: row;
  gap: 6%;
`

export const LinkIcon = styled.div`
  font-size: min(3.2vw, 5.3vh);
  cursor: pointer;
`
