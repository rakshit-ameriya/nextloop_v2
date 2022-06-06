import React from 'react';
import { TEXT_CONSTANTS } from '../../types/enum';
import Carousel from 'components/Carousel';

const Header = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#010028] relative">
        <Carousel />
        <div className="w-full h-screen absolute top-0 py-10">
          <div className="w-1/2  flex justify-center place-items-center  ">
            <div className="text-[#0AD4A5] text-4xl font-bold ml-40 mt-36 ">
              <h1>{TEXT_CONSTANTS.REAL_TECHNOLOGY}</h1>
              <h1 className="text-white text-4xl ">
                {TEXT_CONSTANTS.SOLUTIONS}
              </h1>

              <div className="max-w-sm mt-4">
                <h1 className="text-xs font-normal text-white">
                  {TEXT_CONSTANTS.LOREM_IPSUM_DOLAR}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
