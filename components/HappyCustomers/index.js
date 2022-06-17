import React from 'react';
import Image from 'next/image';
import { TEXT_CONSTANTS } from '../../types/enum';

const IMAGES_DATA = {
  imgData_1: [
    {
      id: 1,
      image: '/happyCustomers1.png',
    },
    {
      id: 2,
      image: '/happyCustomers2.png',
    },
    {
      id: 3,
      image: '/happyCustomers3.png',
    },
  ],
  imgData_2: [
    {
      id: 1,
      image: '/happyCustomers4.png',
    },
    {
      id: 2,
      image: '/happyCustomers5.png',
    },
    {
      id: 3,
      image: '/happyCustomers6.png',
    },
  ],
};

function HappyCustomers() {
  return (
    <div>
      <div className="text-center mt-2">
        <div>
          <div>
            <h1 className="text-3xl font-extrabold">
              {TEXT_CONSTANTS.HAPPY_SERVICES}
            </h1>
          </div>
        </div>

        <p className=" mt-3">
          {TEXT_CONSTANTS.WE_COOPERATE_WITH_GLOBAL_BRANDS}
        </p>
      </div>
      <div className=" mt-5 w-full h-screen flex justify-items-center">
        <div className=" w-1/2">
          <div className=" flex justify-evenly mt-16 ml-24">
            <div className="h-24 w-28 flex flex-col space-y-12">
              {IMAGES_DATA.imgData_1.map(img => (
                <div key={img.id}>
                  <Image
                    src={img.image}
                    width={'20'}
                    height={'20'}
                    layout="responsive"
                    alt={img.image}
                  />
                </div>
              ))}
            </div>
            <div className="h-24 w-28 flex flex-col space-y-12">
              {IMAGES_DATA.imgData_2.map(img => (
                <div key={img.id}>
                  <Image
                    src={img.image}
                    width={'20'}
                    height={'20'}
                    layout="responsive"
                    alt={img.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="ml-28 mt-28">
            <div className="w-14 h-10 ">
              <Image
                src={'/happyCustomers7.PNG'}
                width={20}
                height={20}
                layout="responsive"
                alt="Statue of Liberty"
              />
            </div>
            <div className="text-3xl font-bold mt-8">
              <p>{TEXT_CONSTANTS.BEST_WEB_STUDIO}</p>
              <span>{TEXT_CONSTANTS.IN_NEWYORK}</span>
              <span className="text-3xl font-normal">
                {TEXT_CONSTANTS.ACCORDING}
              </span>
            </div>

            <div className="text-3xl">
              <p>{TEXT_CONSTANTS.TO_MAGAZINE_DEVELOPER}</p>
            </div>
            <div className=" h-screen flex justify-start">
              <div className="w-28 h-24 mt-10">
                <Image
                  src={'/happyCustomers8.PNG'}
                  width={10}
                  height={10}
                  layout="responsive"
                  alt="Signature"
                />
              </div>
              <div>
                <div className="text-base font-bold leading-5 mt-20 ml-2 text-gray-500">
                  <p>{TEXT_CONSTANTS.RICHARD_JACOBSON}</p>
                </div>
                <div className="text-base font-normal leading-5 ml-2 text-gray-500">
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
