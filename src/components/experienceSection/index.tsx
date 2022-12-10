import React from 'react'
import { ExperienceContainer, ExperienceScreen } from './experienceSection'

import experienceTab from '../../resources/media/experienceTab.png'
import BrowserPage from '../browser/browserPage'

const ExperienceSection = () => {
  return (
    <>
      {/* <ExperienceContainer>
        <ExperienceScreen src={experienceTab} />
      </ExperienceContainer> */}
      <BrowserPage pageName="Experience" />
    </>
  )
}

export default ExperienceSection
