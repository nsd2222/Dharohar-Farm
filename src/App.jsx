import React from "react";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import Rooms from "./components/Rooms";
import Gallery from "./components/Gallery";
import Amenities from "./components/Amenities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen ">
      <Navigation />
      <HeroSection />
      <Rooms />
      <Gallery />
      <Amenities />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;