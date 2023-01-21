import React from "react";
import twitter from "./Assets/Social Icons/Twitter.svg";
import linkin from "./Assets/Social Icons/LinkedIn.svg";
import github from "./Assets/Social Icons/Github.svg";
function Footer() {
  return (
    <div className="bg-dark">
      <div className="max-w-[1240px] m-auto lg:px-[50px] px-4 py-4">
        <div className="flex justify-between items-center">
          <h4 className="text-gray font-Prata">Johnathan Specter</h4>

          <div className="flex gap-4">
            <img  className="hover:scale-110 transition-all cursor-pointer" src={twitter} alt="Twitter" />
            <img  className="hover:scale-110 transition-all  cursor-pointer" src={linkin} alt="LinkedIn" />
            <img  className="hover:scale-110 transition-all  cursor-pointer" src={github} alt="Github" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
