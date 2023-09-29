import { Link } from "react-router-dom";
import { menuLink } from "./data";
import { useState } from "react";

export default function Header() {
  // Initialize state to track whether each list is open or closed
  const [isOpen, setIsOpen] = useState(new Array(menuLink.length).fill(false));

  // Function to toggle the state for a specific list
  const toggleList = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };

  return (
    <div className="bg-[#4D148C] z-50 fixed w-full top-0 left-0 right-0">
      <div className="max-w-[1100px] p-[16px] flex justify-between mx-auto h-[90px]">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="w-24"
              src="https://i.imgur.com/Wm6Qj3m.png"
              alt=""
            />
          </Link>
          <nav className="ml-16 hidden md:block">
            <div className="flex text-white font-semibold h-[90px] text-sm">
              {menuLink.map((section, index) => (
                <div key={index} className="relative">
                  <button className="flex h-full p-5 items-center cursor-pointer gap-2" onClick={() => toggleList(index)}>
                    <h3>{section.title}</h3>
                    <span>
                      <i className="fa-solid fa-chevron-down"></i>
                    </span>
                  </button>
                  {isOpen[index] && (
                    <ul className="absolute bg-white w-[280px]">
                      {section.list.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Link className="border-b text-sm font-normal border-gray-300 text-[#333333] p-[13px] hover:underline text-left block" to={`/${item.slug}`}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
        <div>
          <i className="fa-regular text-3xl text-white fa-circle-user"></i>
        </div>
      </div>
    </div>
  );
}
