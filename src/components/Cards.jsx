import { logo1, logo2, logo3 } from "../assets";

const Cards = () => {
  return (
    <div className="w-full h-screen flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center w-full rounded-xl h-full  bg-[#004D43]">
          <img src={logo1} alt="" />
          <button className="absolute text-white rounded-3xl left-10 px-5 py-1 text-lg border-[1px] bottom-10">
            ©2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative w-1/2 flex items-center justify-center h-full rounded-xl bg-[#212121]">
          <img src={logo2} alt="" />
          <button className="absolute text-white rounded-3xl left-10 px-5 py-1 text-lg border-[1px] bottom-10">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative w-1/2 flex items-center justify-center h-full rounded-xl bg-[#212121]">
          <img className="w-28" src={logo3} alt="" />
          <button className="absolute text-white rounded-3xl left-10 px-5 py-1 text-lg border-[1px] bottom-10">
            BUSINESS BOOTCAMP ALUMINI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
