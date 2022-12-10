import styled from 'styled-components'

interface TabProps {
  isSpotlight: boolean
}

export const TabContainer = styled.div<TabProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100%;
  margin-right: -0.8vw;
`

export const TabEdge = styled.div`
  background-color: #eeeeee;
  border-radius: 0.5vw;
  width: 1vw;
  height: 100%;
  z-index: 1;
`

export const TabEdgeBackground = styled.div<TabProps>`
  background-color: ${(props) =>
    props.isSpotlight ? '#ffffff' : 'transparent'};
  width: 10.5vw;
  height: 50%;
  position: absolute;
  left: 0.5vw;
  top: 50%;
`

export const TabBackground = styled.div<TabProps>`
  background-color: ${(props) =>
    props.isSpotlight ? '#ffffff' : 'transparent'};
  border-radius: 0.5vw;
  width: 9.5vw;
  height: 81%;
  position: relative;
  top: 19%;
  display: flex;
  flex-direction: row;
  padding-left: 0.6vw;
`

export const TabLogo = styled.p`
  color: black;
  font-size: 1.1vw;
  font-family: 'Poppins-Light';
  text-shadow: 0.7px 1px 1px #eca96d;
  align-self: center;
  justify-selft: center;
`

export const TabTitle = styled.p`
  color: black;
  font-size: 0.9vw;
  font-family: 'Poppins-ExtraLight';
  align-self: center;
  margin-left: 0.5vw;
  margin-top: 0.1vw;
`
