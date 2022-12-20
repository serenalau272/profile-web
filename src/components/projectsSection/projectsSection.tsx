import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  padding: 1vw 2.4vw 1vw 2.4vw;
  overflow-x: auto;
`

export const ProjectsTitle = styled.p`
  margin-left: 0.6vw;
  font-size: 2.9vw;
  font-family: 'KumbhSans-Bold';
  color: #585858;
`

export const ProjectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 13vw;
  width: 18vw;
  background-color: #494949;
  border-radius: 0.7vw;
  // template text
  text-align: center;
  line-height: 13vw;
  color: white;
  font-size: 3vw;
  font-family: 'KumbhSans-Bold';
`

interface ProjectImgProps {
  isLandscape: boolean
}

export const ProjectImg = styled.img<ProjectImgProps>`
  width: ${(props) => (props.isLandscape ? '100%' : 'auto')};
  height: ${(props) => (props.isLandscape ? 'auto' : '100%')};;
  max-height: 100%;
  max-width: 100%:
`
