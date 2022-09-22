import React from 'react';
import Image from 'next/image';
import { TEXT_CONSTANTS } from 'types/enum';

const WhyUs = () => {
  return (
    <div className="2xl:w-4/5 mx-auto">
      <div className="relative flex justify-center flex-col px-5 sm:flex-row sm:gap-x-40 items-center  w-full h-1/2 my-20">
        <div className="w-full sm:w-72 2xl:w-80 flex flex-col py-10 ">
          <div className="relative bg-primaryGreenText w-16 h-3 xl:w-24 2xl:w-52">
            <div className="absolute -bottom-1 w-40 sm:w-64">
              <h1 className="font-bold sm:text-2xl text-xl xl:text-3xl 2xl:text-4xl ">
                {' '}
                {TEXT_CONSTANTS.WHY_US}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap justify-start  text-xs xl:text-xs 2xl:text-lg mt-3 font-montserrat">
            <h1>{TEXT_CONSTANTS.TECH_ENTHUSIASTS}</h1>
          </div>
          <div className="text-sm font-light my-3 xl:text-md 2xl:text-lg">
            <h1>{TEXT_CONSTANTS.WE_PRIDE_OURSELVES}</h1>
          </div>
        </div>
        <div className="w-[280px] h-[300px]  2xl:w-[640px] 2xl:h-[470px] relative ">
          <Image
            src="/images/whyus.png"
            layout="fill"
            alt="whyus"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
