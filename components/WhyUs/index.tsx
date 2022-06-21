import React from 'react';
import Image from 'next/image';
import { TEXT_CONSTANTS } from 'types/enum';

const WhyUs = () => {
  return (
    <div>
      <div className=" relative flex justify-center flex-col sm:flex-row sm:space-x-36 space-x-0 items-center  w-full h-1/2 my-20">
        <div className="w-64 flex flex-col py-20">
          <div className="relative bg-[#0AD4A5] w-28 h-3">
            <div className=" absolute -bottom-0.5 text-[22px] xl:text-2xl 2xl:text-3xl font-bold ">
              {TEXT_CONSTANTS.WHY_US}
            </div>
          </div>

          <div className="flex flex-wrap justify-start  text-[12px] xl:text-md 2xl:text-lg mt-3">
            <h1>{TEXT_CONSTANTS.LOREM_IPSUM_DOLAR_1}</h1>
          </div>
          <div className="text-[11px] font-light my-3 xl:text-md 2xl:text-lg">
            <h1>{TEXT_CONSTANTS.WE_ARE_STRONG_AND_WORTHY}</h1>
          </div>
        </div>
        <div className="">
          <Image src="/images/whyus.png" width={400} height={350} alt="whyus" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
