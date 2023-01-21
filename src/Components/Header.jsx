import React from "react";
import { useState } from "react";
import Hamburger from "./Assets/hamburger.svg";
function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);
  return (
    <div className="w-full  bg-black m-auto fixed top-0 left-0 right-0 transition duration-300 ">
      <div className="max-w-[1240px]  m-auto p-auto flex justify-between z-50 items-center  lg:px-[50px] px-4 py-7 md:py-6">
        <h1 className="font-Prata text-gray text-xl z-50">Johnathan Specter</h1>

        <div>
          <ul className="hidden md:flex gap-7 text-white text-base">
            <li className="hover:text-yellow cursor-pointer">
              <a>Articles</a>
            </li>
            <li className="hover:text-yellow cursor-pointer">
              <a>Chats</a>
            </li>
            <li className="hover:text-yellow cursor-pointer">
              <a>Awards</a>
            </li>
            <li className="hover:text-yellow cursor-pointer">
              <a>About</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="hidden md:flex bg-yellow px-10 py-4 font-Prata hover:scale-110 transition-all">
            Get in touch
          </button>
        </div>
        <div
          onClick={handleNav}
          className={`md:hidden text-white z-50 cursor-pointer `}
        >
          <img src={Hamburger} alt="project1" />
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`
    md:hidden absolute bg-black top-0 left-0 right-0 bottom-0 flex justify-center   text-center h- items-center h-screen transition-all duration-300 ease-in-out
    ${
      nav
        ? "transform origin-top top-20 "
        : "transform -translate-y-full origin-bottom"
    }
 `}
      >
        <ul
          className={` absolute top-20 font-normal font-Inter  text-gray py-10 text-semibold text-base 
                        `}
        >
          <li className="p-4 cursor-pointer hover:text-yellow">
            <a>Articles</a>
          </li>
          <li className="p-4  cursor-pointer hover:text-yellow">
            <a>Charts </a>
          </li>
          <li className="p-4  cursor-pointer hover:text-yellow">
            <a>Awards</a>
          </li>
          <li className="p-4  cursor-pointer hover:text-yellow">
            <a>About</a>
          </li>
          <button className="bg-yellow text-black px-10 py-4 font-Prata">
            Get in touch
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
