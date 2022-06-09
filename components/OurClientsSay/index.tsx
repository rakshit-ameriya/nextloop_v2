import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { TEXT_CONSTANTS } from 'types/enum';

const OurClinetsSay: NextPage = () => {
  const CLIENTS_SAYS_DATA = [
    {
      id: 1,
      image_1: (
        <Image
          src={'/images/Vector 40.png'}
          width={650}
          height={230}
          alt="testimonials-1"
        />
      ),
      image_2: '/images/Ellipse 54.png',
      paragraph: TEXT_CONSTANTS.CAN_WE_SAY_ABOUT_THESE_GUY,
      title: TEXT_CONSTANTS.DEVELOPMENT_SERVER,
    },
    {
      id: 2,
      image_1: (
        <Image
          src={'/images/Vector 40.png'}
          width={650}
          height={230}
          alt="testimonials-1"
        />
      ),
      image_2: '/images/Ellipse 54.png',
      paragraph: TEXT_CONSTANTS.CAN_WE_SAY_ABOUT_THESE_GUY,
      title: TEXT_CONSTANTS.DEVELOPMENT_SERVER,
    },
  ];

  return (
    <div className="w-full h-screen mt-20">
      <div className="text-center my-4">
        <h1 className="text-xl font-bold mb-2">
          {TEXT_CONSTANTS.OUR_CLIENT_SAYS}
        </h1>
        <h1 className="text-xs font-thin">
          {TEXT_CONSTANTS.OUR_CLIENT_VALUE_US}
        </h1>
      </div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden h-96">
          <div className="carousel-item active relative float-left w-full h-2/3 text-center">
            <div className="flex justify-center ">
              <div className="w-full h-1/2 mt-14 bg-cover">
                <Image
                  src={'/images/Vector 40.png'}
                  width={650}
                  height={230}
                  alt="testimonials-1"
                />
              </div>
            </div>
            <div className="w-full h-40 flex justify-center ">
              <div className="flex justify-center items-start w-1/2 h-1/2 absolute top-0">
                <Image
                  src={'/images/Ellipse 54.png'}
                  className=""
                  alt="smaple image"
                  width={110}
                  height={110}
                />
              </div>

              <div className="absolute top-36 left-auto">
                <p className="text-[13px] mx-auto text-white max-w-lg mb-3 ">
                  {TEXT_CONSTANTS.CAN_WE_SAY_ABOUT_THESE_GUY}
                </p>
                <h1 className="text-white text-lg">
                  {TEXT_CONSTANTS.DEVELOPMENT_SERVER}
                </h1>
              </div>
            </div>
          </div>
          {CLIENTS_SAYS_DATA.map(item => (
            <div
              key={item.id}
              className=" carousel-item  relative float-left w-full h-2/3 text-center"
            >
              <div className=" w-full h-1/2 mt-14 bg-cover">{item.image_1}</div>
              <div className="mt-12 mb-6 flex  justify-center">
                <div className="flex justify-center items-start w-1/2 h-1/2 absolute top-0">
                  <Image
                    src={item.image_2}
                    className=""
                    alt="smaple image"
                    width={110}
                    height={110}
                  />
                </div>

                <div className="absolute top-36 left-auto">
                  <p className="text-[13px] mx-auto text-white max-w-lg mb-3">
                    {item.paragraph}
                  </p>
                  <h1 className="text-white text-sm font-semibold">
                    {item.title}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev absolute left-40 top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <div className="w-10 h-10 rounded-3xl bg-[#0AD4A5] flex justify-center items-center">
            <Image
              src="/images/Vector 10.png"
              width={14}
              height={16}
              alt="right-arrow"
              className="rotate-180"
            />
          </div>
        </button>
        <button
          className="carousel-control-next absolute right-40 top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <div className="w-10 h-10 rounded-3xl bg-[#0AD4A5] flex justify-center items-center">
            <Image
              src="/images/Vector 10.png"
              width={14}
              height={16}
              alt="right-arrow"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default OurClinetsSay;
