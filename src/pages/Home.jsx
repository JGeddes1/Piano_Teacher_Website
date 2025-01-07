import React from "react";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/About";
import Tuition from "../components/Tuition";
import TestimonialsSection from "../components/Testermonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Tuition />
      <TestimonialsSection />
      <Contact />
    </div>
  );
};

export default Home;
