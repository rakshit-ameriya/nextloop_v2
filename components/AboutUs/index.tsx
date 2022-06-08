import React,{useState} from 'react';
import Image from 'next/image';
import { TEXT_CONSTANTS } from 'types/enum';

const AboutUs = () => {
    const[progress,setProgress]=useState<number>(60)
  return (
    <div className=" relative  w-full h-screen  ">
      <div className="object-cover bg-cover  flex justify-center w-2/3 h-2/3 absolute -top-36 left-24 text-black -z-50">
        <Image src="/Vector 39.svg" width={900} height={500} alt="vector" />
      </div>
      <div className="relative flex justify-center space-x-28  w-full h-screen items-center  my-20">
        <div className="w-56 flex flex-col">
          <div className="relative bg-[#0AD4A5] w-28 h-3">
            <div className="absolute -bottom-1 text-[24px] font-bold ">
              {TEXT_CONSTANTS.ABOUT_US}
            </div>
          </div>
          <div className="flex flex-wrap justify-start font-light  text-[12px] mt-2">
            <h1>{TEXT_CONSTANTS.WE_ARE_MORE_THAN}</h1>
          </div>
          <div className="my-3">
            <h1 className="leading-4 text-[11px] font-normal text-[#7A7A7A]">
              {TEXT_CONSTANTS.WE_ARE_STRONG_AND_WORTHY}
            </h1>
          </div>
          <div className="">
            <div className="mt-4">
              <div className="flex justify-start text-xs text-gray-400">
                <div>
                  <h1 className="flex justify-start text-xs pb-2 font-sans font-semibold text-black">
                    Regular Customers
                  </h1>
                </div>
                <h1 className="mx-6">{progress}%</h1>
              </div>
              <div className="w-full bg-gray-400 rounded-md">
                <div
                  className="bg-[#0AD4A5] text-xs font-medium text-blue-100 text-center p-0.5 leading-none  h-2 rounded-md"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex justify-start text-xs text-gray-400">
                <div>
                  <h1 className="flex justify-start text-xs pb-2 font-sans font-semibold text-black">
                    Regular Customers
                  </h1>
                </div>
                <h1 className="mx-6">{progress}%</h1>
              </div>
              <div className="w-full bg-gray-400 rounded-md">
                <div
                  className="bg-[#0AD4A5] text-xs font-medium text-blue-100 text-center p-0.5 leading-none  h-2 rounded-md"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex justify-start text-xs text-gray-400">
                <div>
                  <h1 className="flex justify-start text-xs pb-2 font-sans font-semibold  text-black">
                    Regular Customers
                  </h1>
                </div>
                <h1 className="mx-6">{progress}%</h1>
              </div>
              <div className="w-full bg-gray-400 rounded-md">
                <div
                  className="bg-[#0AD4A5] text-xs font-medium text-blue-100 text-center p-0.5 leading-none  h-2 rounded-md"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-self-end rounded-full  w-1/3">
          <div className="w-96 h-96 absolute top-8 left-3 z-50">
            <Image
              src="/playbutton.png"
              height={90}
              width={90}
              alt="platbutton"
            />
          </div>
          <Image
            src="/Ellipse 80.png"
            width={450}
            height={450}
            alt="ellipse"
            className="absolute top-0"
          />
        </div>
      </div>
      <div className=" absolute object-cover bg-cover -top-10 left-36 -z-50">
        <Image src="/Group 12444.svg" width={1000} height={850} alt="loop" />
      </div>
    </div>
  );
};

export default AboutUs;
