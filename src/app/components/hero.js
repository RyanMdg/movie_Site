import React from "react";
import "../globals.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function hero() {
  const scrollToTrailler = () => {
    scroll.scrollTo("traillerSection", {
      smooth: true,
      offset: -50, // Adjust the offset based on your layout
    });
  };
  return (
    <div className=" grid sm:grid-cols-2 max-sm:gap-[2rem] mt-[5rem] lg:mx-[8rem] mb-[5rem] ">
      <div className=" ps-5 flex flex-col gap-5  justify-center">
        <h1 className=" uppercase text-[#D70000] font-bold">
          The INSURRECTION
        </h1>

        <p className=" uppercase text-[#d9d9d9]">
          A lower class revolution turns the world equality upside down against
          the higher class corporates in any way he could.
        </p>
        <div className=" flex gap-5">
          <ScrollLink
            to="traillerSection"
            smooth={true}
            className="text-center hover:cursor-pointer hover:bg-[#D70000] hover:text-[#000] hover:font-bold uppercase text-[#D70000] border border-[#D70000] px-6 py-1 rounded-xl"
            onClick={scrollToTrailler}
          >
            Watch
          </ScrollLink>

          <ScrollLink
            to="traillerSection"
            smooth={true}
            className="text-center hover:cursor-pointer hover:bg-[#D70000] hover:text-[#000] hover:font-bold uppercase text-[#D70000] border border-[#D70000] px-6 py-1 rounded-xl"
            onClick={scrollToTrailler}
          >
            Trailer
          </ScrollLink>
        </div>
      </div>
      <div className=" flex justify-center">
        <img src="/try 1.png" alt="" />
      </div>
    </div>
  );
}

export default hero;
