import { Link } from "react-router-dom";
import { menuLink } from "./data";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  

  return (
    <div className="bg-[#4D148C] z-50 fixed w-full top-0 left-0 right-0">
      <div className="max-w-[1100px] flex justify-between mx-auto p-4 pt-[30px] pb-[30px]">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="w-24"
              src="https://i.imgur.com/Wm6Qj3m.png"
              alt=""
            />
          </Link>
          <nav
            className={`ml-16 max-[812px]:ml-0 max-[812px]:absolute max-[812px]:bg-white max-[812px]:w-full max-[812px]:top-[90px] max-[812px]:left-0 max-[812px]:right-0 max-[812px]:h-screen ${
              isOpen ? "max-[812px]:block" : "max-[812px]:hidden"
            }`}
          >
            <ul className="flex max-[812px]:flex-col max-[812px]:gap-0 gap-10 max-[812px]:text-[#333333] text-white font-semibold text-sm">
              {menuLink.map((navLink, i) => (
                <li key={i}>
                  <Link
                    to={navLink.slug}
                    className="flex max-[812px]:p-[25px] max-[812px]:border gap-2"
                    onClick={closeMenu}
                  >
                    <span>{navLink.label}</span>
                    {/* <span><i className="fa-solid fa-chevron-down"></i></span> */}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          {/* <i className="fa-regular text-3xl text-white fa-circle-user"></i> */}
          <i className="fa-solid text-3xl text-white hidden max-[812px]:block fa-bars" onClick={openMenu}></i>
        </div>
      </div>
    </div>
  );
}
