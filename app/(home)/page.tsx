import { HeroSectionVIdeo } from "@/components/HeroSectionVideo/HeroSectionVIdeo";
import { USPSection } from "@/components/HomeSections/USPSection";
import { ProjectsSection } from "@/components/HomeSections/ProjectsSection";
import { TestimonialSection } from "@/components/HomeSections/TestimonialSection";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSectionVIdeo
        videoDesktopSrc="/assets/videos/home/desktop.webm"
        videoMobileSrc="/assets/videos/home/mobile.webm"
      />
      {/* usp */}
      <USPSection />
      {/* Featured Projects section */}
      <ProjectsSection />
      {/* Testimonials */}
      <TestimonialSection />
    </>
  );
}
