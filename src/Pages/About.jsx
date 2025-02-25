import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons/faLightbulb";
import { faBullseye } from "@fortawesome/free-solid-svg-icons/faBullseye";

const About = () => {
    return (
      <section id="about" className="mb-20 flex  justify-center">
        <div className="flex flex-col text-center mt-20">
        <h2 className="text-3xl font-bold text-white">About Me</h2>
        <small className="text-white">**A short BIO**</small>
        <span className="text-center m-10 md:mt-10 md:ml-40 md:mr-40 text-white"> 
        Hi, I'm JOHN NWABUEZE I'm a Frontend Developer passionate about building modern,
         user-friendly, and high-performance websites. With a strong focus on React.js and Tailwind CSS,
         I craft seamless digital experiences that are both visually stunning and highly functional.
         I thrive on turning ideas into reality through clean, maintainable code and pixel-perfect UI/UX.
          Whether it's developing responsive websites, optimizing performance, or creating interactive user interfaces,
         I love bringing projects to life.
          </span>
          <div className="text-center mt-10">
            
          <h2 className="text-2xl font-bold mb-5 text-white gap-3 flex justify-center">
          <FontAwesomeIcon icon={faLightbulb} className="text-yellow-300 mt-1" />
             What I Do Best: </h2>
          <div className="container md:flex gap-10 justify-center">
          <div className="card shadow-md p-6">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-3xl" />
             <h2 className="text-white"> Responsive Web Design</h2> 
             <p className="text-white"> Making sure websites look great on all devices.</p>
          </div>
          <div className="card shadow-md p-6">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-3xl" />
             <h2 className="text-white"> Modern Frontend Technologies</h2> 
             <p className="text-white">React.js, Valina.js, Tailwind CSS, and more.</p>
          </div>
          </div>
          </div>
          <div className="text-center mt-10 text-white">
          <h2 className="text-2xl font-bold mb-5  gap-3 flex justify-center">
          <FontAwesomeIcon icon={faBullseye} className="text-white mt-1" />
             My Mission:</h2>
          <p className="card shadow-md md:pl-40 md:pr-40 pt-5 pb-10">To build fast, accessible, and engaging web applications that not only meet user needs but also push
             the boundaries of frontend development.Let's build something awesome together! 🚀
          </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  