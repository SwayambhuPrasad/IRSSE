"use client";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="container w-full h-full m-auto lg:px-14 p-5   flex flex-col items-center justify-center px-5 ">
        {/*DG NAIR Visit to IRISET*/}
        <div>
          <div className="bg-gray-300 p-5 lg:text-lg lg:font-medium">
            DG NAIR Visit to IRISET
          </div>
          <div className="w-full max-w-5xl py-5 -b-10 mx-auto gap-5 columns-2 space-y-5">
            <img src="/dgNair/1.jpg" alt="" />
            <img src="/dgNair/2.jpg" alt="" />
          </div>
        </div>

        {/*Events*/}
        <div>
          <div className="bg-gray-300 p-5 lg:text-lg lg:font-medium">
            Events
          </div>
          <div className="w-full max-w-5xl py-5 -b-10 mx-auto gap-5 columns-3 space-y-5">
            <img src="/Events/1.jpg" alt="" />
            <img src="/Events/2.jpg" alt="" />
            <img src="/Events/3.jpg" alt="" />
            <img src="/Events/4.jpg" alt="" />
            <img src="/Events/5.jpg" alt="" />
            <img src="/Events/6.jpg" alt="" />
            <img src="/Events/7.jpg" alt="" />
            <img src="/Events/8.jpg" alt="" />
          </div>
        </div>
        {/*S & T Installation*/}
        <div>
          <div className="bg-gray-300 p-5 lg:text-lg lg:font-medium">
            S & T Installations
          </div>
          <div className="w-full max-w-5xl py-5 -b-10 mx-auto gap-5 columns-3 space-y-5">
            <img src="/Installation/1.jpg" alt="" />
            <img src="/Installation/2.jpg" alt="" />
            <img src="/Installation/3.jpg" alt="" />
            <img src="/Installation/4.jpg" alt="" />
            <img src="/Installation/5.jpg" alt="" />
            <img src="/Installation/6.jpg" alt="" />
            <img src="/Installation/7.jpg" alt="" />
            <img src="/Installation/8.jpg" alt="" />
            <img src="/Installation/9.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
