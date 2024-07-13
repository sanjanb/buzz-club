import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/common/HeroSection";
import MenuItems from "../components/common/MenuItems";
import Footer from "../components/common/Footer";

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
