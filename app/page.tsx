import React from "react";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectSection";
import LandingSection from "@/components/LandingSection";
import LatestUiCloneSection from "@/components/LatestUiCloneSection";
import LatestBlogSection from "@/components/LatestBlogSection";
import SkillsSection from "@/components/Skillsection";
// import SkillsSection from '@/components/Skillsection';

const Home: React.FC = () => {
  return (
    <div>
      <LandingSection />
      <ProjectsSection />
      <LatestUiCloneSection />
      {/* <LatestBlogSection/> */}
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;
