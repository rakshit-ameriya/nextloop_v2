import React from 'react';
import Image from 'next/image';
import { TEXT_CONSTANTS } from 'types/enum';

const WhyUs = () => {
  return (
    <div>
      <div className=" relative flex justify-center space-x-36 items-center  w-full h-1/2 my-20">
        <div className="w-56 flex flex-col py-20">
          <div className="relative bg-[#0AD4A5] w-20 h-3">
            <div className="absolute -bottom-0.5 text-[22px] font-bold ">
              {TEXT_CONSTANTS.WHY_US}
            </div>
          </div>

          <div className="flex flex-wrap justify-start  text-[12px] mt-3">
            <h1>{TEXT_CONSTANTS.LOREM_IPSUM_DOLAR_1}</h1>
          </div>
          <div className="text-[11px] font-light my-3">
            <h1>{TEXT_CONSTANTS.WE_ARE_STRONG_AND_WORTHY}</h1>
          </div>
        </div>
        <div className="flex justify-start rounded-md ">
          <Image src="/images/whyus.png" width={400} height={350} alt="whyus" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
