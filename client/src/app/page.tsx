"use client"
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // animation lasts 1s
    }, []);

    return (
        <div className="min-h-screen">
            <Navigation />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </div>
  );
};

export default Index;
