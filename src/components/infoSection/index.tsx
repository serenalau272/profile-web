import React, { useState } from "react";
import AboutSection from "../aboutSection";
import ContactSection from "../contactSection";
import ExperienceSection from "../experienceSection";
import ProjectsSection from "../projectsSection";
import { HomeLogo, InfoComputer, InfoContainer, NavBar } from "./infoSection";

import infoComputer from "../../resources/infoComputer.png";

interface IInfoSectionProps {
  onClickHome: () => void;
}

const InfoSection: React.FC<IInfoSectionProps> = (props: IInfoSectionProps) => {
  enum Section {
    About,
    Projects,
    Experience,
    Contact,
  }

  const [section, setSection] = useState(Section.About);

  return (
    <InfoContainer>
      <InfoComputer src={infoComputer} />
      <NavBar>
        <HomeLogo onClick={props.onClickHome}>sl.</HomeLogo>
      </NavBar>
      {/* <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection /> */}
    </InfoContainer>
  );
};

export default InfoSection;
