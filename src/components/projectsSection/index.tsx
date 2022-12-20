import React from 'react'
import {
  ProjectBox,
  ProjectImg,
  ProjectsContainer,
  ProjectsTitle,
} from './projectsSection'

import BrowserPage from '../browser/browserPage'
import { Section } from '../../util/enums/Section'
import { Carousel } from '../carousel/carousel'
import { data } from '../../util/data'

const ProjectsSection = (): JSX.Element => {
  const loadProjectBoxes = () => {
    const projects: JSX.Element[] = []

    let count: number = 0
    data.projects.forEach((project) => {
      projects.push(
        <ProjectBox>
          <ProjectImg
            src={data.projects[count].image.src}
            isLandscape={data.projects[count].image.isLandscape}
          />
        </ProjectBox>,
      )
      count++
    })
    return projects
  }

  const carouselConfig = {
    dots: true,
    itemGap: '1.5vw',
  }

  return (
    <>
      <BrowserPage section={Section.Projects}>
        <ProjectsContainer>
          <ProjectsTitle>{Section.Projects}</ProjectsTitle>
          <Carousel config={carouselConfig} position={{ marginTop: '1vw' }}>
            {loadProjectBoxes()}
          </Carousel>
        </ProjectsContainer>
      </BrowserPage>
    </>
  )
}

export default ProjectsSection
