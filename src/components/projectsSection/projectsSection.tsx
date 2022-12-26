import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  padding: 0.9vw 1.7vw 1vw 1.7vw;
  overflow-x: auto;
`

export const ProjectsTitle = styled.p`
  margin-left: 1.1vw;
  font-size: 2.9vw;
  font-family: 'KumbhSans-Bold';
  color: #585858;
`

export const ProjectBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 15vw;
  width: 19.62vw;
  background-color: #494949;
  border-radius: 0.8vw;
`

interface ProjectImgProps {
  isLandscape: boolean
}

export const ProjectImg = styled.img<ProjectImgProps>`
  width: ${(props) => (props.isLandscape ? '100%' : 'auto')};
  height: ${(props) => (props.isLandscape ? 'auto' : '100%')};
  max-height: 100%;
  max-width: 100%;
`

export const OverlayBg = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding: 1.25vw 1.25vw 0.9vw;
  background-color: rgba(0, 0, 0, 0.86);
  color: white;
  height: 15vw;
  width: 19.62vw;
  border-radius: 0.8vw;
  opacity: 0;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 100;
  }
`

export const OverlayDate = styled.p`
  font-family: 'Poppins-ExtraLight';
  font-size: 0.72vw;
  letter-spacing: 0.15vw;
`

export const OverlayTitle = styled.p`
  font-family: 'Poppins-Medium';
  font-size: 1.45vw;
`

export const OverlayRole = styled.p`
  font-family: 'Poppins-Regular';
  font-style: italic;
  font-size: 0.8vw;
  color: #ffd28e;
  line-height: 1vw;
  letter-spacing: 0.01vw;
`

export const OverlayDescription = styled.p`
  font-family: 'Poppins-Light';
  font-size: 0.9vw;
  white-space: pre-wrap;
  margin-top: 0.7vw;
  line-height: 1.2vw;
  letter-spacing: 0.01vw;
`

export const OverlayTechContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: auto;
`

export const OverlayTech = styled.p`
  font-family: 'Poppins-ExtraLight';
  font-size: 0.75vw;
  color: white;
  margin-left: 0.4vw;
`
