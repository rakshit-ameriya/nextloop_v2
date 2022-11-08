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
          layout="fill"
          alt="testimonials-1"
        />
      ),
      image_2: '/images/user.png',
      paragraph: TEXT_CONSTANTS.UNDER_TIGHT_DEADLINES,
      title: TEXT_CONSTANTS.HARRY_ADITOLA_CEO,
    },
    {
      id: 2,
      image_1: (
        <Image
          src={'/images/Vector 40.png'}
          layout="fill"
          alt="testimonials-1"
        />
      ),
      image_2: '/images/user.png',
      paragraph: TEXT_CONSTANTS.AFTER_EVALUATING_A_FEW_OUTSOURCERS,
      title: TEXT_CONSTANTS.MR_HENRY_CEO,
    },
  ];

  return (
    <div className="w-full h-2/3 my-20">
      <div className="flex justify-center my-3">
        <div className="relative bg-primaryGreenText w-28 h-3 md:w-64 xl:w-62 2xl:w-64">
          <div className="absolute -bottom-1 w-56 md:w-72 xl:w-80 2xl:w-80 ">
            <h1 className="font-bold text-[14px] md:text-3xl xl:text-3xl 2xl:text-4xl">
              {' '}
              {TEXT_CONSTANTS.OUR_CLIENT_SAYS}
            </h1>
          </div>
        </div>
      </div>
      <h1 className="text-xs xl:twxt-sm 2xl:text-lg text-center my-3">
        {TEXT_CONSTANTS.OUR_CLIENT_VALUE_US}
      </h1>

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
            <div className="relative md:w-[50%] w-[100%] h-[60%] md:h-[100%] mt-14 bg-cover mx-auto">
              <Image
                src={'/images/Vector 40.png'}
                layout="fill"
                alt="testimonials-1"
              />
              <div className="w-full flex justify-center ">
                <div className="flex justify-center items-start w-[40%] h-[40%] absolute -top-14">
                  <Image
                    src={'/images/user.png'}
                    className="object-contain"
                    alt="smaple image"
                    layout="fill"
                  />
                </div>

                <div className="w-[80%] absolute top-[57%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <p className="text-[8px] mx-auto xl:text-[12px] 2xl:text-[14px] text-[#000] opacity-50  mb-3 ">
                    {TEXT_CONSTANTS.WE_WOULD_LIKE_TO_EXPRESS}
                  </p>
                  <h1 className="text-white text-[8px] xl:text-[12px] 2xl:text-lg font-semibold">
                    {TEXT_CONSTANTS.RAHUL_JAIN_CEO}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {CLIENTS_SAYS_DATA.map(item => (
            <div
              key={item.id}
              className=" carousel-item  relative float-left w-full h-2/3 text-center"
            >
              <div className="relative md:w-[50%] h-[60%] md:h-[100%] mt-14 bg-cover mx-auto">
                {item.image_1}
                <div className="mt-12 mb-6 flex  justify-center ">
                  <div className="flex justify-center items-start w-[40%] h-[40%] absolute -top-14">
                    <Image
                      src={item.image_2}
                      className="object-contain"
                      alt="smaple image"
                      layout="fill"
                    />
                  </div>

                  <div className="w-[80%] absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p className="text-[8px] mx-auto xl:text-[12px] 2xl:text-[14px] text-[#000] opacity-50  mb-3">
                      {item.paragraph}
                    </p>
                    <h1 className="text-[#fff] text-[8px] xl:text-[12px] 2xl:text-lg font-semibold">
                      {item.title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev rounded-full w-auto h-10  absolute left-40 top-1/2  flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <div className="w-10 h-10 hidden xl:flex rounded-3xl bg-[#0AD4A5]  justify-center items-center">
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
          className="carousel-control-next rounded-full w-auto h-10  absolute right-40 top-1/2 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <div className="w-10 h-10 hidden xl:flex  rounded-3xl bg-[#0AD4A5]  justify-center items-center">
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
