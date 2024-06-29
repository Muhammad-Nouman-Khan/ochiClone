import React from "react";
import { logo } from "../assets";
const Footer = () => {
  return (
    <div className="relative flex flex-col md:flex-row gap-5 w-full p-10 md:p-20">
      <div className="md:w-1/2 h-full flex flex-col justify-between font-founder">
        <div className="heading">
          <h1 className="leading-none text-[9vw] -mb-[2vw] font-extrabold">
            EYE-
          </h1>
          <h1 className="leading-none text-[9vw] -mb-[2vw] font-extrabold">
            OPENING
          </h1>
        </div>
        <img className="w-20 md:flex absolute bottom-3" src={logo} alt="" />
      </div>
      <div className="md:w-1/2">
        <h1 className="font-founder leading-none text-[8vw]">PRESENTATIONS</h1>
        <div className="font-neue">
          <span className=" mb-10 block text-2xl">S:</span>
          {["Instagram", "Behance", "Facebook", "Linkedin"].map(
            (item, index) => (
              <a className="block underline text-xl" key={index} href="#">
                {item}
              </a>
            )
          )}
        </div>
        <div className="font-neue">
          <span className=" mb-10 mt-10 block text-xl">L:</span>
          {[
            "202-1965 W 4th Ave",
            "Vancouver, Canada",
            "30 Chukarina St",
            "Lviv, Ukraine",
          ].map((item, index) => (
            <a className="block underline text-xl" key={index} href="#">
              {item}
            </a>
          ))}
        </div>
        <span className=" lg:mb-10 mt-10 block text-xl">E:</span>
        <a className="block mb-10 underline text-2xl" href="#">
          hello@ochi.design
        </a>
      </div>
    </div>
  );
};

export default Footer;
