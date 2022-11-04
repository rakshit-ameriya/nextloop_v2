import React from 'react';
import Image from 'next/image';
import { TEXT_CONSTANTS } from '../../types/enum';

const IMAGES_DATA = {
  imgData_1: [
    {
      id: 1,
      image: '/images/millennialz-2.jpeg',
    },
    {
      id: 2,
      image: '/images/mygyde.png',
    },
  ],
  imgData_2: [
    {
      id: 1,
      image: '/images/chwala-bearings.jpeg',
    },
    {
      id: 2,
      image: '/images/blue-bird-logo.png',
    },
  ],
};

function HappyCustomers() {
  return (
    <div className="md:my-40">
      <div className="flex justify-center my-3">
        <div className="relative bg-primaryGreenText w-32 h-3 md:w-72 xl:w-72 2xl:w-80">
          <div className="absolute -bottom-1 w-56 md:w-72 xl:w-80 2xl:w-96 ">
            <h1 className="font-bold text-[14px] md:text-3xl xl:text-3xl 2xl:text-4xl">
              {TEXT_CONSTANTS.HAPPY_SERVICES}
            </h1>
          </div>
        </div>
      </div>
      <h1 className=" 2xl:text-lg xl:text-md flex justify-center">
        {TEXT_CONSTANTS.WE_COOPERATE_WITH_GLOBAL_BRANDS}
      </h1>

      <div className=" w-full h-1/2 flex flex-col sm:flex-col md:flex-row justify-evenly mt-5">
        <div className="mx-auto flex-1">
          <div className="flex sm:justify-evenly justify-center  sm:space-x-16 space-x-10">
            <div className="flex flex-col space-y-12 ">
              {IMAGES_DATA.imgData_1.map(img => (
                <div key={img.id}>
                  <Image
                    src={img.image}
                    width={100}
                    height={100}
                    alt={img.image}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex sm:flex-col space-y-12">
              {IMAGES_DATA.imgData_2.map(img => (
                <div key={img.id}>
                  <Image
                    src={img.image}
                    width={100}
                    height={100}
                    alt={img.image}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 mx-auto mt-4 md:mt-0">
          <p className="w-[80%] mx-auto font-montserratBold text-xl leading-relaxed">
            {TEXT_CONSTANTS.NEXTLOOP_HAS_CONSTANTLY_PROVIDED}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HappyCustomers;
