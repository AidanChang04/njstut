import dynamic from "next/dynamic";
import React from "react";
import AboutMe from "../components/AboutMe.jsx";
import Projects from "../components/Projects.jsx";
import EmailSection from "../components/EmailSection.jsx";
import Footer from "../components/Footer.jsx";
import AchievementsSection from "../components/AchievementsSection.jsx";

//Server: not found error handler
const HeroSection = dynamic(() => import("../components/HeroSection.jsx"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <main>
        <HeroSection />
        <AchievementsSection />
        <AboutMe />
        <Projects />
        <EmailSection />
      </main>
      <Footer />
    </div>
  );
}
