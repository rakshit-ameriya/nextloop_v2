import React from 'react';
import Constants from '../../constants';
import { TEXT_CONSTANTS } from '../../types/enum';
import Image from 'next/image';

const images = [
  {
    id: 1,
    image: '/Youtube.png',
  },
  {
    id: 2,
    image: '/Instagram.png',
  },
  {
    id: 3,
    image: '/Facebook.png',
  },
  {
    id: 4,
    image: '/Twitter.png',
  },
];

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
          <div className="mt-8 flex justify-start space-x-4">
            {images.map(img => (
              <div key={img.id} className="flex justify-start mx-4 ">
                <Image width={'30'} height={'30'} src={img.image} alt="Image" />
              </div>
            ))}
          </div>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4 underline decoration-green-500/[.33] ">
              {TEXT_CONSTANTS.DISCOVER}
            </p>
            {Constants.DISCOVER.map((items, id) => (
              <li
                key={id}
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
            {Constants.INFORMATION.map((items, id) => (
              <li
                key={id}
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
            {Constants.SUPPORT.map((items, id) => (
              <li
                key={id}
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
            {Constants.CONTACT.map((items, id) => (
              <li
                key={id}
                className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
              >
                {items}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-5 flex justify-center w-8 h-8 border-b-0 border-t-0  bg-[#0c0c0cd5] rounded-full">
          <Image
            className="object-contain h-15 w-15 mt-2 "
            src="/icon.png"
            width={'30'}
            height={'30'}
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
