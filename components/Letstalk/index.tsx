import React from 'react';
import Image from 'next/image';
import { TEXT_CONSTANTS } from '../../types/enum';
import Link from 'next/link';

const Letstalk = () => {
  return (
    <>
      <div className="w-full h-3/4  flex justify-center items-center py-2 my-16">
        <Link href={'/contact'}>
          <div className="w-4/5 h-1/2 cursor-pointer border-1 rounded-2xl sm:rounded-full flex flex-col sm:flex-row justify-center items-center sm:space-x-3 space-x-0 p-3">
            <div className="">
              <h1 className="text-3xl font-montserrat font-bold text-center xl:text-2xl 2xl:text-3xl ml-0 xl:ml-32 2xl:ml-32">
                {TEXT_CONSTANTS.LETS_TALK}
              </h1>
              <h1 className="text-sm  text-center mt-10 xl:text-lg 2xl:text-xl ">
                {TEXT_CONSTANTS.SEND_US}
              </h1>
              <h1 className="text-sm  text-center xl:text-lg 2xl:text-xl ">
                {TEXT_CONSTANTS.OUR_CONSULTANT}
              </h1>
            </div>
            <div className="mt-2 flex justify-center flex-col space-y-2">
              <Image
                src={'/images/lets_talk.png'}
                width={70}
                height={70}
                alt="Message Icon"
              />
              <div className="w-16 bg-green-300 border-1 border-green-400 mt-4 -ml-6"></div>
              <div className="w-32 bg-green-300 border-1 border-green-400 mt-2"></div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Letstalk;
