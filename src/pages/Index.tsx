import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import FloatingGlassElements from "@/components/FloatingGlassElements";
import LoadingScreen from "@/components/LoadingScreen";

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
        className="min-h-screen bg-background relative overflow-x-hidden w-full"
      >
        {/* Background Gradients */}
        {/* Deep navy/black background with blue spotlight effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Top center spotlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(30,64,175,0.2),transparent_70%)] blur-[80px]" />
          {/* Right mid spotlight */}
          <div className="absolute top-[30%] right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)] blur-[100px]" />
          {/* Left mid spotlight */}
          <div className="absolute top-[50%] left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1),transparent_70%)] blur-[100px]" />
          {/* Bottom center glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(30,64,175,0.15),transparent_70%)] blur-[80px]" />
          {/* Subtle ambient spots */}
          <div className="absolute top-[15%] left-[20%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(96,165,250,0.06),transparent_70%)] blur-[60px]" />
          <div className="absolute top-[70%] right-[15%] w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(59,130,246,0.08),transparent_70%)] blur-[70px]" />
        </div>

        <ParticleBackground />
        <FloatingGlassElements />
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
      </motion.div>
    </>
  );
};

export default Index;
