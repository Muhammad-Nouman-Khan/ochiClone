import React from "react";
import { logo } from "../assets";

const Footer = () => {
  return (
    <div className="flex gap-5 w-full h-screen p-20">
      <div className="w-1/2 h-full flex flex-col justify-between font-founder">
        <div className="heading">
          <h1 className="leading-none text-[9vw] -mb-[2vw] font-extrabold">
            EYE-
          </h1>
          <h1 className="leading-none text-[9vw] -mb-[2vw] font-extrabold">
            OPENING
          </h1>
        </div>
        <img className="w-20" src={logo} alt="" />
      </div>
      <div className="w-1/2">
        <h1 className="font-founder leading-none text-[8vw] mt-10">
          PRESENTATIONS
        </h1>
        <div className="font-neue">
          <span className=" mb-10 block text-2xl">S:</span>
          {["Instagram", "Behance", "Facebook", "Linkedin"].map(
            (item, index) => (
              <a className="block text-2xl" key={index} href="#">
                {item}
              </a>
            )
          )}
        </div>
        <div className="font-neue">
          <span className=" mb-10 mt-10 block text-2xl">L:</span>
          {[
            "202-1965 W 4th Ave",
            "Vancouver, Canada",
            "30 Chukarina St",
            "Lviv, Ukraine",
          ].map((item, index) => (
            <a className="block text-2xl" key={index} href="#">
              {item}
            </a>
          ))}
        </div>
        <span className=" mb-10 mt-10 block text-2xl">E:</span>
        <a className="block text-2xl" href="#">
          hello@ochi.design
        </a>
      </div>
    </div>
  );
};

export default Footer;
