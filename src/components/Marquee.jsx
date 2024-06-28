import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="flex whitespace-nowrap overflow-hidden mt-20 text-white text border-t-[1px] border-b-[1px] border-zinc-500">
        <h1 className="text-[22vw] tracking-tighter font-extrabold leading-none">
          WE ARE OCHI
        </h1>
        <h1 className="text-[22vw] tracking-tighter font-extrabold leading-none">
          WE ARE OCHI
        </h1>
      </div>
    </div>
  );
};

export default Marquee;
