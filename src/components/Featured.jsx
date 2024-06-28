import { asset3, asset4 } from "../assets";

const Featured = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-400 pb-20">
        <h1 className="text-8xl font-neue tracking-tight ">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards mt-10 w-full flex gap-10">
          <div className="card__container relative w-1/2 h-[75vh] ">
            <h1 className="text-[#CDEA68] font-semibold absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl">
              {"FYDE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full  rounded-xl  overflow-hidden ">
              <img src={asset3} className="w-full h-full bg-cover" alt="" />
            </div>
          </div>
          <div className="card__container relative w-1/2 h-[75vh] ">
            <h1 className="text-[#CDEA68] font-semibold absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl">
              {"VISE".split("").map((item, index) => (
                <span key={index}>{item}</span>
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
