import React from "react";

const Footer = () => {
  return (
    <footer className=" backdrop-blur-md border-t border-[#171717] text-white py-4 font-poppins">
    <div className="text-center">
      <p className="text-[1em] font-extralight">
        © {new Date().getFullYear()} Satheshwaran. All rights reserved.
      </p>
    </div>
  </footer>
  
  );
};

export default Footer;
