import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { TEXT_CONSTANTS } from 'types/enum';

const AboutUs = () => {
  const [progress] = useState(60);
  const aboutUs = useRef<HTMLInputElement>(null);
  return (
    <div className=" relative  w-full h-1/2" ref={aboutUs} id="aboutUs">
      <div className="object-cover bg-cover  flex justify-center  w-2/3 h-2/3 absolute top-52 sm:absolute sm:-top-36 sm:left-24 text-black -z-50">
        <Image
          src="/images/Vector 39.svg"
          width={900}
          height={500}
          alt="vector"
        />
      </div>
      <div className="relative flex justify-center flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-28 space-x-0  w-full h-screen items-center  my-40 sm:my-0">
        <div className="w-56 flex flex-col">
          <div className="relative bg-primaryGreenText w-24 h-3 xl:w-32 2xl:w-40">
            <div className="absolute -bottom-1 w-64">
              <h1 className="font-bold sm:text-2xl text-xl xl:text-3xl 2xl:text-4xl  ">
                {' '}
                {TEXT_CONSTANTS.ABOUT_US}
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-start font-light  text-[14px] mt-2 xl:text-md 2xl:text-lg">
            <h1>{TEXT_CONSTANTS.ONE_TEAM_MANY_TALENTS}</h1>
          </div>
          <div className="mt-1">
            <h1 className="leading-4 text-[10px] font-normal text-secondaryGrayText xl:text-md 2xl:text-lg">
              {TEXT_CONSTANTS.FOUNDED_IN_2020}
            </h1>
          </div>
          <div className="mt-2">
            <h1 className="leading-4 text-[10px] font-normal text-secondaryGrayText xl:text-md 2xl:text-lg">
              {TEXT_CONSTANTS.BORN_IN}
            </h1>
          </div>
          <div className="mt-2">
            <h1 className="leading-4 text-[10px] font-normal text-secondaryGrayText xl:text-md 2xl:text-lg">
              {TEXT_CONSTANTS.PARTNER_WITH_US}
            </h1>
          </div>
          <div className="">
            <div className="mt-4 ">
              <div className="flex justify-start text-xs text-gray-400">
                <div>
                  <h1 className="flex justify-start text-xs pb-2 font-sans font-semibold text-black xl:text-md 2xl:text-[15px]">
                    {TEXT_CONSTANTS.REGULAR_CUSTOMERS}
                  </h1>
                </div>
                <h1 className="mx-6 xl:text-md 2xl:text-lg">{progress}%</h1>
              </div>
              <div className="w-full bg-gray-400 rounded-md">
                <div
                  className="bg-primaryGreenText text-xs font-medium text-blue-100 text-center p-0.5 leading-none  h-2 rounded-md"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex justify-start text-xs text-gray-400">
                <div>
                  <h1 className="flex justify-start text-xs pb-2 font-sans font-semibold text-black xl:text-md 2xl:text-[15px]">
                    {TEXT_CONSTANTS.REGULAR_CUSTOMERS}
                  </h1>
                </div>
                <h1 className="mx-6 xl:text-md 2xl:text-lg">{progress}%</h1>
              </div>
              <div className="w-full bg-gray-400 rounded-md">
                <div
                  className="bg-primaryGreenText text-xs font-medium text-blue-100 text-center p-0.5 leading-none  h-2 rounded-md"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex justify-start text-xs text-gray-400">
                <div>
                  <h1 className="flex justify-start text-xs pb-2 font-sans font-semibold  text-black xl:text-md 2xl:text-[15px]">
                    {TEXT_CONSTANTS.REGULAR_CUSTOMERS}
                  </h1>
                </div>
                <h1 className="mx-6 xl:text-md 2xl:text-lg">{progress}%</h1>
              </div>
              <div className="w-full bg-gray-400 rounded-md">
                <div
                  className="bg-primaryGreenText text-xs font-medium text-blue-100 text-center p-0.5 leading-none  h-2 rounded-md"
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
              className="object-contain"
            />
          </div>
          <Image
            src="/images/Ellipse 80.png"
            width={450}
            height={450}
            alt="ellipse"
            className="absolute top-0 object-contain"
          />
        </div>
      </div>
      <div className="sm:absolute sm:-top-10 sm:left-36 absolute top-96 object-cover bg-cover  -z-50">
        <Image
          src="/images/Group 12444.svg"
          width={1000}
          height={850}
          alt="loop"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default AboutUs;
