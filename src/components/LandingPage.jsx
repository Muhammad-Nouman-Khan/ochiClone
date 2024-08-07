import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
import { asset5 } from "../assets";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full lg:h-screen pt-1 bg-[#F1F1F1]"
    >
      <div className="textstructure mt-24 lg:mt-52 p-4 lg:px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex item-end overflow-hidden">
              {index === 1 && (
                <motion.div
                  style={{ backgroundImage: `url(${asset5})` }}
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="mr-2 w-[8vw] rounded-md h-[5vw] top-[0.3vw] relative bg-cover bg-center"
                ></motion.div>
              )}
              <h1 className="font-founder leading-none font-semibold uppercase -mb-[2vw] text-[9vw]">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-300 mt-96 md:mt-32 gap-10 flex flex-col md:flex-row md:justify-between md:items-center p-4 lg:py-5 lg:px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-base lg:text-xl font-light leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-black font-light text-sm lg:text-md rounded-full">
            START THE PROJECT
          </div>
          <div className=" hidden lg:flex items-center justify-center w-10 h-10 border-[1px] border-black  rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
