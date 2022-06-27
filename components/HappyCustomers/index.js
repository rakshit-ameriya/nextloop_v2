import React from 'react';
import Image from 'next/image';
import { TEXT_CONSTANTS } from '../../types/enum';

const IMAGES_DATA = {
  imgData_1: [
    {
      id: 1,
      image: '/images/happyCustomers1.png',
    },
    {
      id: 2,
      image: '/images/happyCustomers2.png',
    },
    {
      id: 3,
      image: '/images/happyCustomers3.png',
    },
  ],
  imgData_2: [
    {
      id: 1,
      image: '/images/happyCustomers4.png',
    },
    {
      id: 2,
      image: '/images/happyCustomers5.png',
    },
    {
      id: 3,
      image: '/images/happyCustomers6.png',
    },
  ],
};

function HappyCustomers() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="relative bg-primaryGreenText w-40 h-3 xl:w-64 2xl:w-72">
          <div className="absolute -bottom-1 w-56 xl:w-80 2xl:w-80">
            <h1 className="font-bold sm:text-2xl text-xl xl:text-3xl 2xl:text-4xl  ">
              {TEXT_CONSTANTS.HAPPY_SERVICES}
            </h1>
          </div>
        </div>
      </div>
      <h1 className=" mt-3 2xl:text-lg xl:text-md text-center">
        {TEXT_CONSTANTS.WE_COOPERATE_WITH_GLOBAL_BRANDS}
      </h1>

      <div className=" w-full h-1/2 flex flex-col sm:flex sm:flex-row justify-evenly mt-5">
        <div className="">
          <div className="flex sm:justify-evenly justify-center  sm:space-x-16 space-x-10">
            <div className="flex flex-col space-y-12 ">
              {IMAGES_DATA.imgData_1.map(img => (
                <div key={img.id}>
                  <Image
                    src={img.image}
                    width={100}
                    height={100}
                    alt={img.image}
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
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="p-5">
            <div className="">
              <Image
                src={'/images/happyCustomers7.png'}
                width={35}
                height={35}
                alt="Statue of Liberty"
              />
            </div>
            <div className="text-2xl font-bold mt-3">
              <h1>{TEXT_CONSTANTS.BEST_WEB_STUDIO}</h1>
              <span>{TEXT_CONSTANTS.IN_NEWYORK}</span>
              <span className="text-2xl font-normal">
                {TEXT_CONSTANTS.ACCORDING}
              </span>
            </div>

            <div className="text-2xl">
              <p>{TEXT_CONSTANTS.TO_MAGAZINE_DEVELOPER}</p>
            </div>
            <div className="flex justify-start mt-4">
              <div className="">
                <Image
                  src={'/images/happyCustomers8.png'}
                  width={90}
                  height={90}
                  alt="Signature"
                />
              </div>
              <div>
                <div className="text-base font-bold leading-5  text-gray-500">
                  <p>{TEXT_CONSTANTS.RICHARD_JACOBSON}</p>
                </div>
                <div className="text-base font-normal leading-5  text-gray-500">
                  <p>{TEXT_CONSTANTS.MAGAZINE_EDITOR}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HappyCustomers;
