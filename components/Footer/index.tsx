import React from 'react';
import Constants from '../../constants';
import { TEXT_CONSTANTS } from '../../types/enum';
import Image from 'next/image';
import Link from 'next/link';
import { scrollToTop } from '../../utils/scrollToTop';

const images = [
  {
    id: 1,
    image: '/images/Youtube.png',
  },
  {
    id: 2,
    image: '/images/Instagram.png',
  },
  {
    id: 3,
    image: '/images/Facebook.png',
  },
  {
    id: 4,
    image: '/images/Twitter.png',
  },
];

function Footer() {
  return (
    <>
      <div className="bg-primaryBg  h-1/2 w-full flex justify-center items-center p-5 relative  ">
        <div className="grid sm:grid-cols-5 grid-cols-2 gap-x-4">
          <div className="">
            <h1 className="text-white font-bold text-3xl xl:text-3xl 2xl:text-3xl">
              {TEXT_CONSTANTS.NEXTLOOP}
            </h1>
            <h1 className="text-white text-sm font-light">
              {TEXT_CONSTANTS.TECHNOLOGIES}
            </h1>
            <div className="text-primaryGrayText text-xs xl:text-md 2xl:text-lg my-3">
              <h1>{TEXT_CONSTANTS.OUR_WEB_STUDIO_CREATES_AND_PROMOTES}</h1>
              <h1>{TEXT_CONSTANTS.WEBSITE_WE_WORK_FOR_THE_RESULT}</h1>
            </div>
            <h1 className="text-white font-bold text-md xl:text-lg 2xl:text-lg ">
              {TEXT_CONSTANTS.FOLLOW_US}:
            </h1>
            <div className="my-3 flex justify-start">
              {images.map(img => (
                <div key={img.id} className="mr-3 cursor-pointer">
                  <Image width={15} height={15} src={img.image} alt="Image" />
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <h1 className="text-white font-bold text-sm xl:text-lg 2xl:text-2xl underline decoration-green-300 ">
              {TEXT_CONSTANTS.DISCOVER}
            </h1>
            <ul className="mt-3">
              {Constants.DISCOVER.map(items => (
                <li
                  key={items.id}
                  className="text-primaryGrayText text-xs xl:text-md 2xl:text-lg my-1 font-normal hover:text-black cursor-pointer"
                >
                  <Link href={items.link}>
                    <a> {items.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h1 className="text-white font-bold text-sm xl:text-lg 2xl:text-2xl  underline decoration-green-300">
              {TEXT_CONSTANTS.INFORMATION}
            </h1>
            <ul className="mt-3">
              {Constants.INFORMATION.map((items, id) => (
                <li
                  key={id}
                  className="text-primaryGrayText  text-xs xl:text-md 2xl:text-lg my-1  font-normal hover:text-black cursor-pointer"
                >
                  {items}
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h1 className="text-white font-bold text-sm  xl:text-lg 2xl:text-2xl underline decoration-green-300 ">
              {TEXT_CONSTANTS.HELP_AND_SUPPORT}
            </h1>
            <ul className="mt-3">
              {Constants.SUPPORT.map((items, id) => (
                <li
                  key={id}
                  className="text-primaryGrayText  text-xs xl:text-md 2xl:text-lg my-1 font-normal hover:text-black cursor-pointer"
                >
                  {items}
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h1 className="text-white font-bold text-sm xl:text-lg 2xl:text-2xl underline decoration-green-300">
              {TEXT_CONSTANTS.CONTACT}
            </h1>
            <ul className="mt-3">
              {Constants.CONTACT.map((items, id) => (
                <li
                  key={id}
                  className="text-primaryGrayText  text-xs xl:text-md 2xl:text-lg my-1 font-normal hover:text-black cursor-pointer"
                >
                  {items}
                </li>
              ))}
            </ul>
          </div>
          <div className=" absolute right-16 top-6">
            <div className="cursor-pointer " onClick={scrollToTop}>
              <Image
                src="/images/up-arrow-icon.png"
                width={45}
                height={45}
                alt="arrow-up"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center border-t-[1px] border-secondaryGrayText  bg-primaryBg">
        <h1 className=" text-primaryGrayText text-sm  font-normal p-2">
          {TEXT_CONSTANTS.ALL_RIGHT_RESERVED}
        </h1>
      </div>
    </>
  );
}

export default Footer;
