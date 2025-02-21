import React from "react";
import heroimg from "../../../Assets/hero.png";
import { FaWrench } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background
      <video
        autoPlay
        loop
        muted
        className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 opacity-90"
      >
        <source src={video} type="image" />
        Your browser does not support the video tag.
      </video> */}
     <img src={heroimg} alt="" srcset=""  className='h-full w-full'/>

      {/* /* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 pt-40 h-full flex items-center text-center justify-center">
        <div className=" max-w-2xl bg-blue-100  p-6 rounded-xl bg-white/30 backdrop-blur-">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6  drop-shadow-lg italic text-blue-900">
            From Sales to Repairs,
            <span className="block pt-4">We Keep You Moving</span>
          </h1>
        </div>
      </div>

      {/* Banner CTA - Added z-index to ensure visibility */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-white rounded-tl-lg rounded-r-lg w-full sm:w-[50%]">
          <div className="max-w-7xl mx-auto px-4 pr-10">
            <div className="flex flex-col sm:flex-row items-center justify-between text-blue-900 py-4">
              <div className="flex items-center space-x-3">
                <FaWrench className="text-2xl" />
                <div>
                  <span className="font-bold">Are you ready? </span>
                  <span className="text-blue-900 text-lg sm:text-2xl">Let's repair it now!</span>
                </div>
              </div>
              <button className="mt-4 sm:mt-0 bg-red-600 text-center hover:bg-red-800 px-6 py-3 rounded-md transition-colors duration-300 text-white">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
