import React from "react";
import "../globals.css";

function traillervid() {
  return (
    <div className=" outline-none  flex items-center flex-col my-5">
      <h1 className=" text-white">Your Next.js Video App</h1>
      <video
        className=" rounded-md shadow-lg border-red-500"
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

export default traillervid;
