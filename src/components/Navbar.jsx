import { logo } from "../assets";

const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-20 py-5 flex justify-between items-center">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="links  font-neue flex gap-10 capitalize">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              className={`text-lg font-medium ${index === 4 && "ml-32"}`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
