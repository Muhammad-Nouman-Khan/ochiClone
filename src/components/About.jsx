import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68]">
      <h1 className="font-neue text-[4.5vw] leading-none">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="flex gap-5 w-full border-t-[1px] mt-20 py-10 border-[#232b08]">
        <div className="w-1/2">
          <h1 className="text-[4.5vw]">Our approach:</h1>
          <button className="flex items-center gap-10 px-10 py-6 bg-zinc-900 text-white rounded-full mt-10 uppercase">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 rounded-2xl h-[70vh] bg-red-500"></div>
      </div>
    </div>
  );
};

export default About;
