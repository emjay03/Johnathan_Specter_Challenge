import React from "react";
import spence from "./Assets/image/Spense.png";
import yelp from "./Assets/image/YelpCamp.png";
import arrow from "./Assets/image/arrow.png";
function Content() {
  return (
    <div className="max-w-[1240px] lg:px-[50px] px-4 py-10 m-auto ">
      <div className="flex lg:flex-row flex-col lg:gap-[100px] gap-4 justify-center items-center ">
        <div className="w-full flex flex-col px-0 md:px-24 lg:px-0 ">
          <img src={spence} alt="spence" />

          <div className="py-5">
            <div className="flex gap-4">
            <h1 className="text-gray text-4xl font-Prata"> Spense.com </h1>
            <img src={arrow} alt="arrow"/></div>
            <div className="py-2"></div>
            <p className="text-white text-lg">
              Rethinkng the way writer get paid, an open source platform
              designed to help writers focus more on writing, and less on when
              an how they'll get paid. Project in collaboration with Codewell.cc
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col px-0 md:px-24 lg:px-0 ">
          <img src={yelp} alt="spence" />

          <div className="py-5">
            <div className="flex gap-4">
            <h1 className="text-gray text-4xl font-Prata"> YelpCamp.com</h1>
            <img src={arrow} alt="arrow"/></div>
            <div className="py-2"></div>
            <p className="text-white text-lg">
              {" "}
              Allowing backpack travelers to perfectly plan their tip through an
              open platform similar to TripAdvisor. With over 1m MAU, YelpCamp
              has been the crowd's favorite in 2021.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
