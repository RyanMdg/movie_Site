import React from "react";
import "../globals.css";

function Traillervid() {
  return (
    <div id="traillerSection" className="flex items-center flex-col my-5">
      <h1 className="glitch-text text-[#000] px-6 text-2xl uppercase bg-[#D70000] font-semibold mb-4">
        the INSURRECTION Official-trailer
      </h1>
      <video
        className="rounded-md shadow-lg border-red-500"
        width="800"
        height="360"
        controls
      >
        <source src="/clip1.MOV" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Traillervid;
