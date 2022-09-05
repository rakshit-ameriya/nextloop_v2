import React from 'react';
import { TEXT_CONSTANTS } from '../../types/enum';
import Carousel from 'components/Carousel';

const Header = () => {
  return (
    <>
      <div className="w-full h-screen bg-primaryBg relative top-0">
        <Carousel />
        <div className=" absolute top-64 left-16  lg:absolute lg:top-0 sm:absolute sm:top-1/2 sm:left-24 sm:right-0 xl:absolute xl:left-52 xl:right-0 xl:top-1/4 w-1/2 2xl:absolute 2xl:top-1/4 2xl:left-1/4 2xl:-translate-x-10">
          <div className="flex justify-start w-full items-start">
            <div className="text-primaryGreenText text-4xl xl:text-4xl 2xl:text-6xl 2xl:font-extrabold font-bold">
              <h1>{TEXT_CONSTANTS.NEXT_LEVEL_IT}</h1>
              <h1 className="text-2xl xl:text-4xl 2xl:text-6xl  text-primaryGreenText ">
                {TEXT_CONSTANTS.SOLUTIONS}
              </h1>
              <p className="text-xs 2xl:max-w-sm xl:text-md 2xl:text-xl font-normal mt-2 text-primaryGreenText">
                {TEXT_CONSTANTS.COMMITED_TO_DELIVERING_BEST}
              </p>

              <div className="max-w-sm xl:max-w-sm mt-4 2xl:text-5xl 2xl:max-w-xl">
                <h1 className="text-xs 2xl:max-w-sm xl:text-md 2xl:text-xl font-normal text-primaryGreenText">
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
