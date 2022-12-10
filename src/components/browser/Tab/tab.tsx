import styled from 'styled-components'

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  height: 100%;
`

export const TabEdge = styled.div`
  background-color: #eeeeee;
  border-radius: 0.5vw;
  width: 2vw;
  height: 100%;
  z-index: 1;
`

export const TabEdgeBackground = styled.div`
  background-color: white;
  width: 10.5vw;
  height: 50%;
  position: absolute;
  left: 1.5vw;
  top: 50%;
`

export const TabBackground = styled.div`
  background-color: white;
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
