import { aboutImg } from "../assets";
const About = () => {
  return (
    <div className="w-full px-4 py-20 lg:p-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68]">
      <h1 className="font-neue text-[4.5vw] leading-none">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="flex flex-col md:flex-row gap-5 w-full border-t-[1px] mt-20 py-10 border-[#232b08]">
        <div className="w-1/2">
          <h1 className="text-[4.5vw]">Our approach:</h1>
          <button className="flex text-sm lg:text-xl items-center gap-5 lg:gap-10 px-6 py-5 lg:px-10 lg:py-6 bg-zinc-900 text-white rounded-full mt-4 lg:mt-10 uppercase">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div
          style={{ backgroundImage: `url(${aboutImg})` }}
          className="w-full md:w-1/2 rounded-2xl h-[60vw] md:h-[30vw] bg-contain bg-center"
        ></div>
      </div>
    </div>
  );
};

export default About;
