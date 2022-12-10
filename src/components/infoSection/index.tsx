import React, { useState } from 'react'
import AboutSection from '../aboutSection'
import ContactSection from '../contactSection'
import ExperienceSection from '../experienceSection'
import ProjectsSection from '../projectsSection'
import {
  HomeLogo,
  InfoComputer,
  InfoContainer,
  NavBar,
  SectionContainer,
} from './infoSection'

import infoComputer from '../../resources/media/infoComputer.png'
import NavBarItem from '../navBarItem'
import { Section } from '../../util/enums/Section'

interface IInfoSectionProps {
  onClickHome: () => void
}

const InfoSection: React.FC<IInfoSectionProps> = (props: IInfoSectionProps) => {
  const [currentSection, setCurrentSection] = useState(Section.About)

  const isSection = (section: Section) => {
    return section === currentSection
  }

  const getNavBarItemSection = (section: Section) => {
    let width: string

    switch (section) {
      case Section.About:
        width = '8.2vw'
        break
      case Section.Projects:
        width = '6.7vw'
        break
      case Section.Experience:
        width = '9.3vw'
        break
      case Section.Contact:
        width = '6.7vw'
        break
      default:
        width = '8.2vw'
        break
    }

    return (
      <NavBarItem
        sectionTitle={section === Section.About ? 'About me' : section}
        width={width}
        isSelected={isSection(section)}
        handleOnClick={() => setCurrentSection(section)}
      />
    )
  }

  return (
    <InfoContainer>
      <InfoComputer src={infoComputer} />
      <SectionContainer>
        {isSection(Section.About) && <AboutSection />}
        {isSection(Section.Projects) && <ProjectsSection />}
        {isSection(Section.Experience) && <ExperienceSection />}
        {isSection(Section.Contact) && <ContactSection />}
      </SectionContainer>
      <NavBar>
        {getNavBarItemSection(Section.About)}
        {getNavBarItemSection(Section.Projects)}
        <HomeLogo onClick={props.onClickHome}>sl.</HomeLogo>
        {getNavBarItemSection(Section.Experience)}
        {getNavBarItemSection(Section.Contact)}
      </NavBar>
    </InfoContainer>
  )
}

export default InfoSection
