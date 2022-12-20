import React from 'react'
import { ExperienceContainer, ExperienceTitle } from './experienceSection'

import BrowserPage from '../browser/browserPage'
import { Section } from '../../util/enums/Section'

const ExperienceSection = () => {
  return (
    <>
      <BrowserPage section={Section.Experience}>
        <ExperienceContainer>
          <ExperienceTitle>{Section.Experience}</ExperienceTitle>
        </ExperienceContainer>
      </BrowserPage>
    </>
  )
}

export default ExperienceSection
