import { useEffect, useState } from "react";
import { logo } from "../assets";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <div
      className={`fixed z-[999] backdrop-blur-md transition-transform duration-300 ${
        show ? "transform translate-y-0" : "hidden"
      }  w-full p-4  lg:px-20 lg:py-5 flex justify-between items-center`}
    >
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="links hidden  font-neue lg:flex gap-10 capitalize">
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
      <HiOutlineMenuAlt4 className="lg:hidden flex" />
    </div>
  );
};

export default Navbar;
