import React from "react";
import logo from "/logo1.png";

export const Logo = ({ light = false }) => {
  return (
    <img
      className={`w-20 lg:w-15 opacity-100 block transition-all duration-300 ${light ? "brightness-0 invert" : "brightness-0"}`}
      src={logo}
      alt="Kaz Properties"
    />
  );
};
