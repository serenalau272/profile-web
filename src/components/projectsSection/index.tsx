import React, { useEffect, useState } from 'react'
import { ProjectsContainer, ProjectsScreen } from './projectsSection'

import projectsTab from '../../resources/media/projectsTab.png'
import aboutTab from '../../resources/media/aboutTab.png'
import BrowserPage from '../browser/browserPage'
import { Section } from '../../util/enums/Section'

const ProjectsSection = () => {
  return (
    <>
      {/* <ProjectsContainer>
        <ProjectsScreen src={projectsTab} />
      </ProjectsContainer> */}
      <BrowserPage section={Section.Projects} />
    </>
  )
}

export default ProjectsSection
