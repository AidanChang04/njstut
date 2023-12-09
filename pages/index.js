import dynamic from 'next/dynamic';
import React from 'react';
import AboutMe from 'C:/Users/aidan/njstut/components/AboutMe.jsx';
import Projects from 'C:/Users/aidan/njstut/components/Projects.jsx';
import EmailSection from 'C:/Users/aidan/njstut/components/EmailSection.jsx';
import Footer from 'C:/Users/aidan/njstut/components/Footer.jsx';
import AchievementsSection from 'C:/Users/aidan/njstut/components/AchievementsSection.jsx';

//Server: not found error handler
const HeroSection = dynamic(
  () => import('../../components/HeroSection'),
  { ssr: false }
);

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