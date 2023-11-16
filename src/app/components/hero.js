import React from "react";
import "../globals.css";

function hero() {
  return (
    <div className=" grid sm:grid-cols-2 max-sm:gap-[2rem] mt-[5rem] md:mx-[8rem] ">
      <div className=" ps-10 flex flex-col gap-5  justify-center">
        <h1 className=" uppercase text-[#D70000] font-bold">
          The INSURRECTION
        </h1>
        <p className=" uppercase">
          A lower class revolution turns the world equality upside down against
          the higher class corporates in any way he could.
        </p>
        <a
          href=""
          className=" text-center w-[7rem] uppercase text-[#D70000] border border-[#D70000] px-6 py-1 rounded-xl"
        >
          {" "}
          watch
        </a>
      </div>
      <div className=" flex justify-center">
        <img src="/try 1.png" alt="" />
      </div>
    </div>
  );
}

export default hero;
