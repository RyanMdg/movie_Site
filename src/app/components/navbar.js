import React from "react";
import "../globals.css";

function navbar() {
  return (
    <div>
      <nav className="   mx-[2rem] grid grid-cols-2">
        <ul className=" flex  mt-10">
          <li className=" uppercase">The INSURRECTION</li>
        </ul>
        <ul className=" flex justify-end gap-5  mt-10">
          <li>
            <a href="" className=" hover:border-b hover:border-red-500">
              Home
            </a>
          </li>
          <li>
            <a href="" className=" hover:border-b hover:border-red-500">
              About
            </a>
          </li>
          <li>
            <a href="" className=" hover:border-b hover:border-[#D70000] ">
              Cast
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
