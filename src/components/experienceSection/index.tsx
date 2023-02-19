import React from 'react'
import {
  ExperienceContainer,
  ExperienceTitle,
  ExperienceScreen,
  LanyardsContainer,
} from './experienceSection'

import BrowserPage from '../browser/browserPage'
import projTab from '../../resources/media/projTab.png'
import { Section } from '../../util/enums/Section'
import { Lanyard } from '../lanyard/lanyard'
import { data } from '../../util/data'

const ExperienceSection = () => {
  const loadLanyards = () => {
    const lanyards: JSX.Element[] = []

    let count: number = 0
    data.experience.forEach((experience) => {
      lanyards.push(
        <Lanyard
          {...experience}
          badgeColor={experience.primaryColor}
          bandColor={experience.secondaryColor}
          isShorter={count % 2 !== 0}
        />,
      )
      count++
    })
    return lanyards
  }
  return (
    <>
      {/* <ExperienceContainer>
        <ExperienceScreen src={projTab} />
      </ExperienceContainer> */}
      <BrowserPage section={Section.Experience}>
        <ExperienceContainer>
          <ExperienceTitle>{Section.Experience}</ExperienceTitle>
          <LanyardsContainer>{loadLanyards()}</LanyardsContainer>
        </ExperienceContainer>
      </BrowserPage>
    </>
  )
}

export default ExperienceSection
