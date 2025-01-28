import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[650px] sm:h-[500px] md:h-[650px]"
      style={{ backgroundImage: "url('/homepage.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-8">
          <h1 className="text-4xl sm:text-6xl font-bold">Where Serenity Meets Splendor</h1>
          <p className="mt-4 text-xl sm:text-2xl">
            Immerse yourself in tranquil Morni Hills, where every sunrise feels like a warm embrace of nature.
          </p>
          {/* <Button className="mt-6 px-6 py-3 bg-tan hover:bg-licorice">Book Now</Button> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
