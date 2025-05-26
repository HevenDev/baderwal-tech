import Banner from "@/components/Banner/Banner";
import { HeroSectionVIdeo } from "@/components/HeroSectionVideo/HeroSectionVIdeo";
import ProjectsPageSection from "@/components/ProjectSections/ProjectsPageSection";

const Projects = () => {
  return (
    <>
      <HeroSectionVIdeo
        videoDesktopSrc="/assets/videos/home/desktop.webm"
        videoMobileSrc="/assets/videos/home/mobile.webm"
      />
      <ProjectsPageSection />

      <Banner title="End" />
    </>
  );
};

export default Projects;
