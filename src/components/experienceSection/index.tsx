import React from 'react'
import { ExperienceContainer, ExperienceScreen } from './experienceSection'

import experienceTab from '../../resources/media/experienceTab.png'
import BrowserPage from '../browser/browserPage'
import { Section } from '../../util/enums/Section'

const ExperienceSection = () => {
  return (
    <>
      {/* <ExperienceContainer>
        <ExperienceScreen src={experienceTab} />
      </ExperienceContainer> */}
      <BrowserPage section={Section.Experience} />
    </>
  )
}

export default ExperienceSection
