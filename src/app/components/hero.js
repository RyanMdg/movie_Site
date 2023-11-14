import React from "react";

function hero() {
  return (
    <div className=" grid grid-cols-2 mt-[5rem] mx-[8rem] ">
      <div className=" flex flex-col gap-5 justify-center">
        <h1 className=" uppercase text-[#D70000] font-bold">
          The INSURRECTION
        </h1>
        <p>
          A lower class revolution turns the world equality upside down against
          the higher class corporates in any way he could.
        </p>
        <a
          href=""
          className=" text-center w-[20%] uppercase text-[#D70000] border border-[#D70000] px-6 py-1 rounded-xl"
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
