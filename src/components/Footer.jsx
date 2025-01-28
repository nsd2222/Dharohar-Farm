import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#423a36] text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Dharohar Farm. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
