import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";

const App = () => (
  <div className="w-full min-h-screen bg-[#F1F1F1]">
    <Navbar />
    <LandingPage />
    <Marquee />
    <About />
    <Eyes />
  </div>
);

export default App;
