import React from 'react';
import Image from 'next/image';
import { TEXT_CONSTANTS } from '../../types/enum';

const Letstalk = () => {
  return (
    <div className="w-full h-1/3  flex justify-center mt-10">
      <div className=" rounded-full  h-48 w-3/4 p-4 border-2  shadow-gray-300 flex justify-center ">
        <div className="text-center ml-44 ">
          <h1 className="text-4xl font-bold mb-7">
            {TEXT_CONSTANTS.LETS_TALK}
          </h1>
          <h1 className="text-xs font-medium text-gray-400">
            {TEXT_CONSTANTS.SEND_US}
          </h1>
          <span className="text-xs font-medium text-gray-400">
            {' '}
            {TEXT_CONSTANTS.OUR_CONSULTANT}
          </span>

          <div className="-mx-10 border-b-2 border-green-300  w-20   ml-[350px] "></div>
          <div className="-mx-20  border-b-2 border-green-300  w-40  mt-3 ml-96 "></div>
        </div>
        <div className="h-24 w-28 ml-10  mt-4 p-4">
          <Image
            src={'/images/lets_talk.png'}
            width={28}
            height={24}
            layout="responsive"
            alt="Message Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Letstalk;
