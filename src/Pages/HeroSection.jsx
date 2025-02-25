 import React from "react";
import Mypic from "../assets/johnny.png"

 const HeroSection = () => {
  return (
    <div id="home" className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen gap-6 p-8 text-white">
      {/* Card 1 (Bottom on Mobile, Left on Desktop) */}
      <div className="w-full md:w-1/2 p-6 text-center">
        <h2 className="text-2xl font-bold">Hi, I'm 👋 John Nwabueze, a Software Developer specializing in Front End Development</h2>
      </div>

      {/* Card 2 (Top on Mobile, Right on Desktop) */}
      <div className="w-full md:w-1/2 p-6 text-center">
       <img src={Mypic} alt="" />
      </div>
    </div>
  );
};
  
  export default HeroSection;
  