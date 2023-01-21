import React from "react";
import walmart from "./Assets/Logos/Walmart.svg";
import morgan from "./Assets/Logos/JP Morgan.svg";
import visa from "./Assets/Logos/Visa.svg";
import tinder from "./Assets/Logos/Tinder.svg";
import samsung from "./Assets/Logos/Samsung.svg";
import verizon from "./Assets/Logos/Verizon.svg";
function Hero() {
  return (
    <div className="max-w-[1240px] m-auto p-auto lg:px-[50px] px-4 pt-[150px]">
      <div className="w-full lg:w-[50%] ">
        <h1 className="text-gray font-Prata text-5xl">
          Helping companies build better ,scalable software.
        </h1>
        <div className="py-4"></div>
        <p className="text-white font-Inter text-[17px]">
          Awards winning web developer and author with over 15+ years of working
          experience with Fortune 500 companies like Apple, Google, Facebook,
          and more.
        </p>
      </div>
      <div className="py-6"></div>
      <div className="flex flex-row justify-center  flex-wrap items-center gap-10 lg:gap-x-[95px]">
        <img src={walmart} alt="waltmart" />
        <img src={morgan} alt="morgan" />
        <img src={visa} alt="visa" />
        <img src={tinder} alt="tinder" />
        <img src={samsung} alt="samsung" />
        <img src={verizon} alt="verizon" />
      </div>
    </div>
  );
}

export default Hero;
