import React from "react";

const Rooms = () => {
  return (
    <section id="rooms" className="py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-800 text-tan text-center mb-8">Accommodation</h2>
        <p className="text-center text-white_smoke max-w-3xl mx-auto mb-8">
          Escape to Dharohar Farmstay, featuring a cozy retreat with a total of 3 spacious bedrooms, each thoughtfully designed to blend comfort with the tranquility of Morni Hills.
        </p>

        {/* Grid Layout for Rooms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["room1.jpg", "room2.jpg", "room4.jpg"].map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-2xl">
              <img
                src={`/${img}`}
                alt={`Room ${index + 1}`}
                className="w-full h-[60vh] object-cover rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
