import styled from 'styled-components'

export const ExperienceContainer = styled.div`
  padding: 1vw 2.4vw 1vw 2.4vw;
  overflow-x: auto;
  background-color: #ebe4da;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  gap: 1vw;
`

export const ExperienceTitle = styled.p`
  margin-left: 0.6vw;
  font-size: 2.9vw;
  font-family: 'KumbhSans-Bold';
  color: #585858;
`

export const ExperienceScreen = styled.img`
  width: 100%;
`

export const LanyardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  /* margin-top: -2.5vw; */
  gap: 1vw;
  margin-top: -2vw;
`
