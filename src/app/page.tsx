import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <div data-section="hero">
        <HeroSection />
      </div>
      <div data-section="projects">
        <ProjectsSection />
      </div>
      <TapeSection />
      <TestimonialsSection />
      <div data-section="about">
        <AboutSection />
      </div>
      <div data-section="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
