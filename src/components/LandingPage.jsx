import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-full h-screen pt-1 bg-[#F1F1F1]">
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex item-end overflow-hidden">
              {index === 1 && (
                <div className="mr-5 w-[8vw] rounded-md h-[5vw] top-[1vw] relative bg-red-500"></div>
              )}
              <h1 className="leading-none tracking-tighter font-semibold uppercase text-[7vw]">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-300 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index} className="text-xl font-light leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-black font-light text-md rounded-full">
            START THE PROJECT
          </div>
          <div className="flex items-center justify-center w-10 h-10 border-[1px] border-black  rounded-full">
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
