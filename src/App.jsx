import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";

const App = () => (
  <div className="w-full min-h-screen bg-[#F1F1F1]">
    <Navbar />
    <LandingPage />
    <Marquee />
    <About />
    <Eyes />
    <Featured />
    <Cards />
  </div>
);

export default App;
