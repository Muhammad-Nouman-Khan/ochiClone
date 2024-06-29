import React from "react";
import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.1"
      className="w-full py-10 mt-24 lg:mt-0 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="flex whitespace-nowrap overflow-hidden mt-5 lg:mt-20 text-white text border-t-[1px] border-b-[1px] border-zinc-500">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[22vw] tracking-tighter font-extrabold leading-none pr-20"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[22vw] tracking-tighter font-extrabold leading-none pr-20"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
