import React, { useEffect, useState } from 'react'
import { ProjectsContainer, ProjectsScreen } from './projectsSection'

import projectsTab from '../../resources/media/projectsTab.png'
import aboutTab from '../../resources/media/aboutTab.png'
import BrowserPage from '../browser/browserPage'

const ProjectsSection = () => {
  return (
    <>
      {/* <ProjectsContainer>
        <ProjectsScreen src={aboutTab} />
      </ProjectsContainer> */}
      <BrowserPage pageName="Projects" />
    </>
  )
}

export default ProjectsSection
