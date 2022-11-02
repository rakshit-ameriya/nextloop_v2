import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { TEXT_CONSTANTS } from 'types/enum';

const AboutUs = () => {
  const [skillData] = useState(90);
  const [meetingData] = useState(95);
  const [clientData] = useState(90);
  const aboutUs = useRef<HTMLInputElement>(null);
  return (
    <div className="2xl:w-4/5 mx-auto  my-20 px-5" ref={aboutUs} id="aboutUs">
      <div className="relative flex justify-center flex-col sm:flex-row space-y-10 sm:space-y-0 sm:space-x-28 space-x-0   items-center ">
        <div className="w-64 md:w-96 2xl:w-96 flex flex-col">
          <div className="relative bg-primaryGreenText w-16 h-3 xl:w-32 2xl:w-40 mt-10">
            <div className="absolute -bottom-1 w-64">
              <h1 className="font-bold text-[14px] md:text-3xl xl:text-3xl 2xl:text-4xl">
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
                    {TEXT_CONSTANTS.SKILLFULL_TEAM}
                  </h1>
                </div>
                <h1 className="mx-6 xl:text-md 2xl:text-lg">{skillData}%</h1>
              </div>
              <div className="w-full bg-gray-400 rounded-md">
                <div
                  className="bg-primaryGreenText text-xs font-medium text-blue-100 text-center p-0.5 leading-none  h-2 rounded-md"
                  style={{ width: `${skillData}%` }}
                ></div>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex justify-start text-xs text-gray-400">
                <div>
                  <h1 className="flex justify-start text-xs pb-2 font-sans font-semibold text-black xl:text-md 2xl:text-[15px]">
                    {TEXT_CONSTANTS.MEETING_DEADLINE}
                  </h1>
                </div>
                <h1 className="mx-6 xl:text-md 2xl:text-lg">{meetingData}%</h1>
              </div>
              <div className="w-full bg-gray-400 rounded-md">
                <div
                  className="bg-primaryGreenText text-xs font-medium text-blue-100 text-center p-0.5 leading-none  h-2 rounded-md"
                  style={{ width: `${meetingData}%` }}
                ></div>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex justify-start text-xs text-gray-400">
                <div>
                  <h1 className="flex justify-start text-xs pb-2 font-sans font-semibold  text-black xl:text-md 2xl:text-[15px]">
                    {TEXT_CONSTANTS.CLIENT_SATISFACTION}
                  </h1>
                </div>
                <h1 className="mx-6 xl:text-md 2xl:text-lg">{clientData}%</h1>
              </div>
              <div className="w-full bg-gray-400 rounded-md">
                <div
                  className="bg-primaryGreenText text-xs font-medium text-blue-100 text-center p-0.5 leading-none  h-2 rounded-md"
                  style={{ width: `${clientData}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[280px] h-[300px]  2xl:w-[640px] 2xl:h-[470px] relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 2xl:top-24 2xl:left-28 z-50">
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
            layout="fill"
            alt="ellipse"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
