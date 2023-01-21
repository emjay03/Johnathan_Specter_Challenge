import React from "react";

function Content3() {
  return (
    <div className="max-w-[1240px]  m-auto py-10 lg:px-[50px] px-4">
      <div className="flex flex-col xl:w-[50%] md:w-[70%] w-full">
        <h1 className="text-gray text-4xl font-Prata">
          Interested in working with me?
        </h1>

        <div className="py-3"></div>
        <p className="text-lg font-Inter text-white">
          I'm active on all social media platform listed below, but you can also
          me an email and I will get back to you within 24-48 hours.
        </p>
      </div>
      <div className="py-3"></div>
      <button className="font-Prata bg-yellow px-9 py-3 hover:scale-110 transition-all">Get in Touch</button>
    </div>
  );
}

export default Content3;
