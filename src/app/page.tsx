import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ParcourSection } from "@/components/sections/parcour-section";
import { CompetencesSection } from "@/components/sections/competences-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ParcourSection />
        <CompetencesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
