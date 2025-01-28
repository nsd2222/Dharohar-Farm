import React, { useState } from "react";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("Rooms");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-[#262626] shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h2 className="text-xl font-bold text-slate-50">Dharohar Farm</h2>
        <a
          href="#book-now"
          className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-orange-600"
        >
          Book now
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
