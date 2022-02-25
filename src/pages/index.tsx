import React, { useState } from "react";
import AboutSection from "../components/aboutSection";
import ContactSection from "../components/contactSection";
import ExperienceSection from "../components/experienceSection";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import Navbar from "../components/navbar";
import ProjectsSection from "../components/projectsSection";
import Sidebar from "../components/sidebar";

const Home = () => {
  const [isHome, setIsHome] = useState(true);

  const handleToggleHome = (isHome: boolean) => {
    setIsHome(isHome);
  };

  return (
    <>
      {isHome && <HeroSection onClickScreen={() => handleToggleHome(false)} />}
      {!isHome && <InfoSection onClickHome={() => handleToggleHome(true)} />}
    </>
  );
};

export default Home;
