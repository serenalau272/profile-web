import styled from 'styled-components'

export const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export const Column1 = styled.div`
  width: 38%;
  height: 100%;
  position: relative;
`

export const Column2 = styled.div`
  width: 70%;
  height: 100%;
  padding: 2.5vw 3vw 0vw 0.2vw;
  display: flex;
  flex-direction: column;
`

export const ProfileImg = styled.img`
  width: 80%;
  top: 9.8%;
  left: 10%;
  z-index: 1;
  position: relative;
`

export const ProfileBg = styled.div`
  background: #f4ddb3;
  width: 80.8%;
  height: 79.5%;
  left: 12.8%;
  top: 11%;
  z-index: 0;
  border-radius: 1.8%;
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
  margin-left: 0vw;
`

export const IconsWrapper = styled.div`
  justify-self: stretch;
  align-self: start;
  margin-top: 0.7vw;
  margin-left: -0.2vw;
  display: flex;
  flex-direction: row;
  gap: 0.7vw;
`

export const LinkIcon = styled.div`
  font-size: 2.5vw;
  cursor: pointer;
`
