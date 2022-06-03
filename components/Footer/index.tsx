import React from 'react';
import Constants from '../../constants';
import { TEXT_CONSTANTS } from '../../types/enum';
import img from 'next/image';

function Footer() {
  return (
    <>
      <div className="bg-neutral-800 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5">
          <span
            className="position: absolute;
           text-white font-bold text-4xl"
          >
            {TEXT_CONSTANTS.NEXTLOOP}{' '}
          </span>
          <p className="text-white text-md p-0 font-light	 ">
            {TEXT_CONSTANTS.TECHNOLOGIES}
          </p>
          <div className="text-gray-500 text-xs mt-10">
            <h1>{TEXT_CONSTANTS.OUR_WEB_STUDIO_CREATES_AND_PROMOTES}</h1>{' '}
            {TEXT_CONSTANTS.WEBSITE_WE_WORK_FOR_THE_RESULT}
          </div>
          <br />
          <span className="text-white font-bold">
            {TEXT_CONSTANTS.FOLLOW_US}:
          </span>
          <div className=" mt-8 flex justify-start space-x-4 ">
            <img
              className="object-contain h-6 w-6   "
              src="/Youtube.png"
              alt="Youtube"
            />

            <img
              className="object-contain h-6 w-6  "
              src="/Instagram.png"
              alt="Instagram"
            />
            <img
              className="object-contain h-6 w-6  "
              src="/Facebook.png"
              alt="Facebook"
            />
            <img
              className="object-contain h-6 w-6  "
              src="/Twitter.png"
              alt="Twitter"
            />
          </div>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4 underline decoration-green-500/[.33] ">
              {TEXT_CONSTANTS.DISCOVER}
            </p>
            {Constants.DISCOVER.map((items, index) => (
              <li
                key={index}
                className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
              >
                {items}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4 underline decoration-green-500/[.33]">
              {TEXT_CONSTANTS.INFORMATION}
            </p>
            {Constants.INFORMATION.map((items, index) => (
              <li
                key={index}
                className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
              >
                {items}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4 underline decoration-green-500/[.33] ">
              {TEXT_CONSTANTS.HELP_AND_SUPPORT}
            </p>
            {Constants.SUPPORT.map((items, index) => (
              <li
                key={index}
                className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
              >
                {items}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4 underline decoration-green-500/[.33] ">
              {TEXT_CONSTANTS.CONTACT}
            </p>
            {Constants.CONTACT.map((items, index) => (
              <li
                key={index}
                className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
              >
                {items}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-5 flex justify-center w-14 h-14 border-b-0 border-t-0  bg-[#0c0c0cd5] rounded-full">
          <img
            className="object-contain h-10 w-10 mt-2 "
            src="/icon.png"
            alt="arrow-up"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center border-t-2 border-gray-500  p-5 bg-neutral-800">
        <h1 className=" text-gray-500 text-md pb-2 font-semibold ">
          {TEXT_CONSTANTS.ALL_RIGHT_RESERVED}
        </h1>
      </div>
    </>
  );
}

export default Footer;
