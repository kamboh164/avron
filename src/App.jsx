import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useThemeMode } from "./context/ThemeModeContext";
import Hero from "./components/Hero";
import GenreMarquee from "./components/GenreMarquee";
import Features from "./components/Features";
import Experience from "./components/Experience";
import AISection from "./components/AISection";
import Profile from "./components/Projects";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import CTA from "./components/CTA";
import WhoWeAre from "./components/WhoWeAre";
import "./App.css";

export default function App() {
  const { mode } = useThemeMode();

  // State to track if remaining sections should be loaded
  const [loadRest, setLoadRest] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 900;
    if (!isMobile) {
      setLoadRest(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setLoadRest(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        minHeight: "100vh",
      }}
    >
      <Hero />
      <GenreMarquee surfaceIndex={0} />
      <WhoWeAre surfaceIndex={1} />
      {loadRest && (
        <>
          <Experience surfaceIndex={0} />
          {/* <AISection surfaceIndex={1} /> */}
          <Profile surfaceIndex={0} />
          <HowItWorks surfaceIndex={1} />
          <Stats surfaceIndex={0} />
          <Testimonials surfaceIndex={1} />
          <ContactSection surfaceIndex={0} />
          <CTA surfaceIndex={1} />
        </>
      )}
    </Box>
  );
}