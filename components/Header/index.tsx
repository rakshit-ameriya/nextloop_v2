import React from 'react';
import Link from 'next/link';
import Constants from '../../constants';
import { TEXT_CONSTANTS } from '../../types/enum';
import Carousel from 'components/Carousel';

const Header = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#010028]">
        <Carousel />
        <div className="w-full min-h-40 absolute top-0 ">
          <nav className="flex justify-evenly space-x-40 items-center py-4 px-4 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-5">
            <a
              href="#"
              className="lg:text-2xl text-white md:text-3xl font-semibold tracking-wide"
            >
              {TEXT_CONSTANTS.NEXT}
              <span className=" text-white bg-clip-text ">
                {TEXT_CONSTANTS.LOOP}
              </span>
              <h5 className="text-xs font-light">
                {TEXT_CONSTANTS.TECHNOLOGIES}
              </h5>
            </a>
            <div className="text-white font-semibold text-sm md:static md:bg-transparent md:flex items-center space-y-8 md:space-y-0 md:space-x-8   lg:space-x-14">
              <ul className="flex flex-row space-x-8 space-y-0 md:flex-row items-center  md:space-y-0 md:space-x-8 lg:md:-x-8">
                {Constants.Navigation.map(item => (
                  <Link key={item.id} href={item.link ? item.link : '/'}>
                    <a className="hover:underline decoration-red-500">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </ul>
            </div>
          </nav>
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
