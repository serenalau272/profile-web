import React, { useEffect, useState } from "react";
import { ProjectsContainer, ProjectsScreen } from "./projectsSection";

import projectsTab from "../../resources/projectsTab.png";

const ProjectsSection = () => {
  return (
    <>
      <ProjectsContainer>
        <ProjectsScreen src={projectsTab} />
      </ProjectsContainer>
    </>
  );
};

export default ProjectsSection;
