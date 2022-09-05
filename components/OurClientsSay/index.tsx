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
          height={240}
          alt="testimonials-1"
        />
      ),
      image_2: '/images/Ellipse 54.png',
      paragraph: TEXT_CONSTANTS.UNDER_TIGHT_DEADLINES,
      title: TEXT_CONSTANTS.HARRY_ADITOLA_CEO,
    },
    {
      id: 2,
      image_1: (
        <Image
          src={'/images/Vector 40.png'}
          width={650}
          height={240}
          alt="testimonials-1"
        />
      ),
      image_2: '/images/Ellipse 54.png',
      paragraph: TEXT_CONSTANTS.AFTER_EVALUATING_A_FEW_OUTSOURCERS,
      title: TEXT_CONSTANTS.MR_HENRY_CEO,
    },
  ];

  return (
    <div className="w-full h-2/3 my-20">
      <div className="flex justify-center my-3">
        <div className="relative bg-primaryGreenText w-40 h-3 sm:48 xl:w-44 2xl:w-64">
          <div className="absolute -bottom-1 w-56 xl:w-80 2xl:w-80 ">
            <h1 className="font-bold sm:text-2xl text-xl xl:text-2xl 2xl:text-4xl  ">
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
            <div className="flex justify-center ">
              <div className="w-full h-1/2 mt-14 bg-cover">
                <Image
                  src={'/images/Vector 40.png'}
                  width={650}
                  height={240}
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

              <div className="absolute top-28 xl:top-32 2xl:top-28 left-auto">
                <p className="text-[8px] mx-auto xl:text-md 2xl:text-[14px] text-white max-w-lg mb-3 ">
                  {TEXT_CONSTANTS.WE_WOULD_LIKE_TO_EXPRESS}
                </p>
                <h1 className="text-white text-[8px] 2xl:text-lg font-semibold">
                  {TEXT_CONSTANTS.RAHUL_JAIN_CEO}
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

                <div className="absolute top-28 xl:top-32 2xl:top-28 left-auto">
                  <p className="text-[8px] mx-auto xl:text-md 2xl:text-[14px] text-white max-w-lg mb-3">
                    {item.paragraph}
                  </p>
                  <h1 className="text-white text-[10px] 2xl:text-lg font-semibold">
                    {item.title}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev sm:absolute sm:left-40 sm:top-0 absolute left-20 top-10 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
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
          className="carousel-control-next sm:absolute sm:right-40 sm:top-0 absolute right-20 top-10 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline "
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
