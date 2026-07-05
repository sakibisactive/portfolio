import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import FeaturedThesis from "@/components/FeaturedThesis";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07080c] text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300">
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <FeaturedThesis />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
