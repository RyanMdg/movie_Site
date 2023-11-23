import "../src/app/globals.css";
import React from "react";
import Navbar from "../src/app/components/navbar";
import Hero from "../src/app/components/hero";
import Trailler from "../src/app/components/traillervid";

function index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trailler />
    </div>
  );
}

export default index;
