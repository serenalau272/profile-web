import styled from 'styled-components'

export const BrowserContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
`
export const TabBar = styled.div`
  background-color: #eeeeee;
  width: 100%;
  height: 8.8%;
  display: flex;
  flex-direction: row;
  padding-left: 0.9vw;
`

export const TabsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 80%;
  margin-left: -0.1%;
`

interface CircleBtnProps {
  backgroundColor: string
  borderColor: string
}

export const CircleBtn = styled.div<CircleBtnProps>`
  background-color: ${(props) => props.backgroundColor};
  border: 0.05vw solid ${(props) => props.borderColor};
  width: 0.73vw;
  height: 0.73vw;
  border-radius: 5vw;
  align-self: center;
  margin-top: 0.1vw;
  margin-right: 0.35vw;
  z-index: 10;
`

export const ControlsBar = styled.div`
  display: flex;
  flex-direction: row;
  height: 1.9vw;
  margin-top: 1vw;
`

export const SearchBar = styled.div`
  background-color: #e7e7e7;
  width: 84.5%;
  height: 100%;
  margin-left: 1vw;
  border-radius: 10vw;
  font-family: 'Poppins-ExtraLight';
  font-size: 0.9vw;
  line-height: 2vw;
  padding-left: 1vw;
`

export const Divider = styled.div`
  background-color: #dddddd;
  width: 100%;
  height: 0.07vw;
  margin-top: 1.4vw;
`

export const ContentContainer = styled.div`
  widht: 100%;
  flex: 1 1 auto;
`
