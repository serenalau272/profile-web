import React from "react";
import { ExperienceContainer, ExperienceScreen } from "./experienceSection";

import experienceTab from "../../resources/experienceTab.png";

const ExperienceSection = () => {
  return (
    <>
      <ExperienceContainer>
        <ExperienceScreen src={experienceTab} />
      </ExperienceContainer>
    </>
  );
};

export default ExperienceSection;
