import React from 'react';
import { TEXT_CONSTANTS } from '../../types/enum';
import Carousel from 'components/Carousel';

const Header = () => {
  return (
    <>
      <div className="w-full h-[75vh] sm:h-[100vh] 2xl:h-screen  bg-primaryBg relative top-0">
        <Carousel />
        <div className="w-[90%] md:w-[65%] 2xl:w-[55%]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-start w-full items-start">
            <div className="text-primaryGreenText text-4xl xl:text-4xl 2xl:text-6xl 2xl:font-extrabold font-bold">
              <h1>{TEXT_CONSTANTS.NEXT_LEVEL_IT}</h1>
              <h1 className="text-4xl xl:text-4xl 2xl:text-6xl  text-primaryGreenText ">
                {TEXT_CONSTANTS.SOLUTIONS}
              </h1>
              <p className="text-xs 2xl:max-w-sm xl:text-md 2xl:text-xl font-normal mt-2 text-primaryGreenText">
                {TEXT_CONSTANTS.COMMITED_TO_DELIVERING_BEST}
              </p>
              <div className="max-w-sm xl:max-w-[15rem] mt-4 md:max-w-[15rem] 2xl:max-w-[23rem] lg:max-w-[15rem]">
                <h1 className="text-xs  xl:text-md 2xl:text-xl font-normal text-primaryGreenText">
                  {TEXT_CONSTANTS.OUR_PEOPLE_OUR_ARE_GREATEST}
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
