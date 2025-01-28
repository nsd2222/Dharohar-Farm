import React from "react";

const Gallery = () => {
  return (
    <section id="gallery" className="py-12">
      <div className="container mx-auto px-4 md:px-8"> {/* Added horizontal padding */}
        <h2 className="text-4xl font-800 text-tan text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ">
          <img src="/gal1.jpg" alt="Gallery Image 1" className="rounded-lg shadow-lg object-cover w-full h-64 sm:h-80 lg:h-96" />
          <img src="/gal2.jpg" alt="Gallery Image 2" className="rounded-lg shadow-lg object-cover w-full h-64 sm:h-80 lg:h-96" />
          <img src="/gal3.jpg" alt="Gallery Image 3" className="rounded-lg shadow-lg object-cover w-full h-64 sm:h-80 lg:h-96" />
          <img src="/gal4.jpg" alt="Gallery Image 4" className="rounded-lg shadow-lg object-cover w-full h-64 sm:h-80 lg:h-96" />
          {/* Additional images */}
          <img src="/gal5.jpg" alt="Gallery Image 5" className="rounded-lg shadow-md object-cover w-full h-64 sm:h-80 lg:h-96" />
          {/* <img src="/gal6.jpg" alt="Gallery Image 6" className="rounded-lg shadow-md object-cover w-full h-64 sm:h-80 lg:h-96" /> */}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
