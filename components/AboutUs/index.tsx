import React, { useState } from 'react';
import Image from 'next/image';
import { TEXT_CONSTANTS } from 'types/enum';

const AboutUs = () => {
  const [progress] = useState(60);
  return (
    <div className=" relative  w-full h-screen  ">
      <div className="object-cover bg-cover  flex justify-center  w-2/3 h-2/3 absolute top-52 sm:absolute sm:-top-36 sm:left-24 text-black -z-50">
        <Image
          src="/images/Vector 39.svg"
          width={900}
          height={500}
          alt="vector"
        />
      </div>
      <div className="relative flex justify-center flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-28 space-x-0  w-full h-screen items-center  my-20">
        <div className="w-56 flex flex-col">
          <div className="relative bg-[#0AD4A5] w-28 h-3">
            <div className="absolute -bottom-1 text-[24px] font-bold ">
              {TEXT_CONSTANTS.ABOUT_US}
            </div>
          </div>
          <div className="flex flex-wrap justify-start font-light  text-[12px] mt-2">
            <h1>{TEXT_CONSTANTS.WE_ARE_MORE_THAN}</h1>
          </div>
          <div className="my-3">
            <h1 className="leading-4 text-[11px] font-normal text-[#7A7A7A]">
              {TEXT_CONSTANTS.WE_ARE_STRONG_AND_WORTHY}
            </h1>
          </div>
          <div className="">
            <div className="mt-4">
              <div className="flex justify-start text-xs text-gray-400">
                <div>
                  <h1 className="flex justify-start text-xs pb-2 font-sans font-semibold text-black">
                    {TEXT_CONSTANTS.REGULAR_CUSTOMERS}
                  </h1>
                </div>
                <h1 className="mx-6">{progress}%</h1>
              </div>
              <div className="w-full bg-gray-400 rounded-md">
                <div
                  className="bg-[#0AD4A5] text-xs font-medium text-blue-100 text-center p-0.5 leading-none  h-2 rounded-md"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex justify-start text-xs text-gray-400">
                <div>
                  <h1 className="flex justify-start text-xs pb-2 font-sans font-semibold text-black">
                    {TEXT_CONSTANTS.REGULAR_CUSTOMERS}
                  </h1>
                </div>
                <h1 className="mx-6">{progress}%</h1>
              </div>
              <div className="w-full bg-gray-400 rounded-md">
                <div
                  className="bg-[#0AD4A5] text-xs font-medium text-blue-100 text-center p-0.5 leading-none  h-2 rounded-md"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex justify-start text-xs text-gray-400">
                <div>
                  <h1 className="flex justify-start text-xs pb-2 font-sans font-semibold  text-black">
                    {TEXT_CONSTANTS.REGULAR_CUSTOMERS}
                  </h1>
                </div>
                <h1 className="mx-6">{progress}%</h1>
              </div>
              <div className="w-full bg-gray-400 rounded-md">
                <div
                  className="bg-[#0AD4A5] text-xs font-medium text-blue-100 text-center p-0.5 leading-none  h-2 rounded-md"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex  justify-start items-start rounded-full">
          <div className="absolute top-8 left-3 z-50">
            <Image
              src="/images/playbutton.png"
              height={90}
              width={90}
              alt="platbutton"
            />
          </div>
          <Image
            src="/images/Ellipse 80.png"
            width={450}
            height={450}
            alt="ellipse"
            className="absolute top-0"
          />
        </div>
      </div>
      <div className="sm:absolute sm:-top-10 sm:left-36 absolute top-96 object-cover bg-cover  -z-50">
        <Image
          src="/images/Group 12444.svg"
          width={1000}
          height={850}
          alt="loop"
        />
      </div>
    </div>
  );
};

export default AboutUs;
