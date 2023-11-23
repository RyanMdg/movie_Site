import React from "react";
import "../globals.css";

function hero() {
  return (
    <div className=" grid sm:grid-cols-2 max-sm:gap-[2rem] mt-[5rem] lg:mx-[8rem] mb-[5rem] ">
      <div className=" ps-5 flex flex-col gap-5  justify-center">
        <h1 className=" uppercase text-[#D70000] font-bold">
          The INSURRECTION
        </h1>

        <p className=" uppercase text-white">
          A lower class revolution turns the world equality upside down against
          the higher class corporates in any way he could.
        </p>
        <div className=" flex gap-5">
          <a
            href=""
            className=" text-center  uppercase text-[#D70000] border border-[#D70000] px-6 py-1 rounded-xl"
          >
            {" "}
            watch
          </a>
          <a
            href=""
            className=" text-center  uppercase text-[#D70000] border border-[#D70000] px-6 py-1 rounded-xl"
          >
            {" "}
            trailler
          </a>
        </div>
      </div>
      <div className=" flex justify-center">
        <img src="/try 1.png" alt="" />
      </div>
    </div>
  );
}

export default hero;
