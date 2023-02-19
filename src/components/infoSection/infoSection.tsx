import styled from 'styled-components'

export const InfoContainer = styled.div`
  background: #a4dbd8;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const InfoComputer = styled.img`
  order: 1;
  width: min(93vw, calc(11 / 7 * 98vh));
  height: min(98vh, calc(7 / 11 * 93vw));
  margin-top: auto;
  margin-right: 5vw;
`

export const SectionContainer = styled.div`
  position: absolute;
  width: min(79.5vw, calc(129 / 61 * 62vh));
  height: min(62vh, calc(61 / 129 * 79.5vw));
  margin-left: min(3vh, 2vw);
  bottom: min(28.8vh, 17.6vw);
`

export const NavBar = styled.div`
  position: absolute;
  /* width: 50vw; */
  /* height: 4.5vw; */
  bottom: min(11vh, 6.6vw);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5vw;
`

export const HomeLogo = styled.text`
  color: #484848;
  opacity: 90%;
  text-shadow: 0.13vw 0.2vw 0.08vw #eca96d;
  font-family: 'Poppins-Light';
  font-weight: bolder;
  font-size: min(3.7vw, 640%);
  text-align: center;
  width: 5.5vw;
  cursor: pointer;
`
