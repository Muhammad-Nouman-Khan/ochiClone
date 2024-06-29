import { asset3, asset4 } from "../assets";
import { motion, useAnimation } from "framer-motion";
const Featured = () => {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20">
      <div className="w-full px-4 lg:px-20 border-b-[1px] border-zinc-400 pb-20">
        <h1 className="text-5xl lg:text-8xl font-neue tracking-tight ">
          Featured projects
        </h1>
      </div>
      <div className="px-4 lg:px-20">
        <div className="cards mt-10 w-full flex flex-col md:flex-row gap-10">
          <div
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={() => handleHoverEnd(0)}
            className="card__container relative md:w-1/2 md:h-[40vw] "
          >
            <h1 className="text-[#CDEA68] overflow-hidden font-semibold absolute flex left-1/3 md:left-full md:-translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full  rounded-xl  overflow-hidden ">
              <img src={asset3} className="w-full h-full bg-cover" alt="" />
            </div>
          </div>
          <div
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={() => handleHoverEnd(1)}
            className="card__container relative md:w-1/2 md:h-[40vw] "
          >
            <h1 className="text-[#CDEA68] overflow-hidden flex font-semibold absolute right-1/3 md:right-full md:translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full  rounded-xl  overflow-hidden ">
              <img src={asset4} className="w-full h-full bg-cover" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
