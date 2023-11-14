import React from "react";
import Navbar from "../src/app/components/navbar";
import Hero from "../src/app/components/hero";
import "../src/app/globals.css";

function index() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default index;
