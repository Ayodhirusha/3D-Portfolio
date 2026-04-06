import { useState, useCallback, Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";

// Lazy load sections for better initial performance
const HeroSection = lazy(() => import("@/components/HeroSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const TechStackSection = lazy(() => import("@/components/TechStackSection"));
const EducationSection = lazy(() => import("@/components/EducationSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const ParticleBackground = lazy(() => import("@/components/ParticleBackground"));
const FloatingGlassElements = lazy(() => import("@/components/FloatingGlassElements"));

import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="min-h-screen bg-background relative overflow-x-hidden w-full transition-colors duration-500"
      >
        {/* Deep Dark Background with Blue Spotlight Patches */}
        <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300 dark:opacity-100 opacity-20">
          {/* Top spotlight */}
          <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(30,58,138,0.15),transparent_70%)]" />
          {/* Center-right spotlight */}
          <div className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.08),transparent_65%)]" />
          {/* Bottom-left spotlight */}
          <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(30,58,138,0.12),transparent_65%)]" />
          {/* Mid subtle glow */}
          <div className="absolute top-[60%] left-[40%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06),transparent_70%)]" />
        </div>
        <Suspense fallback={null}>
          <ParticleBackground />
          <FloatingGlassElements />
          <ThemeToggle />
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <TechStackSection />
          <ProjectsSection />
          <ServicesSection />
          <ContactSection />
          <Footer />
        </Suspense>
      </motion.div>
    </>
  );
};

export default Index;
