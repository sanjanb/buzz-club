import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MenuItems from "../components/MenuItems";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MenuItems />
      <Footer />
    </div>
  );
};

export default HomePage;
