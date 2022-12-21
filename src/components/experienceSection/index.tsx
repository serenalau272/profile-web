import React from 'react'
import {
  ExperienceContainer,
  ExperienceTitle,
  ExperienceScreen,
} from './experienceSection'

import BrowserPage from '../browser/browserPage'
import projTab from '../../resources/media/projTab.png'
import { Section } from '../../util/enums/Section'

const ExperienceSection = () => {
  return (
    <>
      <ExperienceContainer>
        <ExperienceScreen src={projTab} />
      </ExperienceContainer>
      {/* <BrowserPage section={Section.Experience}>
        <ExperienceContainer>
          <ExperienceTitle>{Section.Experience}</ExperienceTitle>
        </ExperienceContainer>
      </BrowserPage> */}
    </>
  )
}

export default ExperienceSection
