import React from "react";

const Gallery = () => {
  return (
    <section id="gallery" className="py-12 flex flex-col items-center">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-800 text-tan text-center mb-8">Gallery</h2>

        {/* Image Grid with Hover Effect */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
          {["gal1.jpg", "gal2.jpg", "gal3.jpg", "gal4.jpg", "gal6.jpg", "gal9.jpg", "gal8.jpg", "gal10.jpg"].map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-xl">
              <img
                src={`/${img}`}
                alt={`Gallery Image ${index + 1}`}
                className="rounded-xl object-cover w-full h-64 sm:h-80 lg:h-96 transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Time-lapse Video */}
        <div className="w-full flex justify-center">
          <video
            className="w-full max-w-4xl h-auto aspect-video rounded-xl shadow-lg"
            controls
            autoPlay
            loop
            muted
          >
            <source src="/galv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
