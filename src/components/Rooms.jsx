import React from "react";

const Rooms = () => {
  return (
    <section id="rooms" className="py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-800 text-tan text-center mb-8">Accommodation</h2>
        <p className="text-center text-white_smoke max-w-3xl mx-auto mb-8">
          Escape to Dharohar Farmstay, featuring two charming accommodations with a total of 4 spacious bedrooms, each thoughtfully designed to blend comfort with the tranquility of Morni Hills.
        </p>

        <div className="flex justify-center gap-9 w-full md:w-2/3 mx-auto flex-wrap">
          <img
            src="/room1.jpg"
            alt="Room 1"
            className="h-[66vh] object-cover rounded-lg shadow-2xl mb-4 md:mb-0 w-full md:w-auto"
          />
          <img
            src="/room2.jpg"
            alt="Room 2"
            className="h-[66vh] object-cover rounded-lg shadow-2xl mb-4 md:mb-0 w-full md:w-auto"
          />
          <img
            src="/room3.jpg"
            alt="Room 3"
            className="h-[66vh] object-cover rounded-lg shadow-2xl mb-4 md:mb-0 w-full md:w-auto"
          />
          <img
            src="/room4.jpg"
            alt="Room 4"
            className="h-[66vh] object-cover rounded-lg shadow-2xl mb-4 md:mb-0 w-full md:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Rooms;
