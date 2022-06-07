import React from 'react';
import Image from 'next/image';
import { TEXT_CONSTANTS } from '../../types/enum';

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
            <div className="h-24 w-28 flex flex-col space-y-12 ">
              <div>
                <Image
                  src={'/happyCustomers1.PNG'}
                  width={'20'}
                  height={'20'}
                  layout="responsive"
                  alt="Happy-Customer"
                />
              </div>
              <div>
                <Image
                  src={'/happyCustomers2.PNG'}
                  width={'20'}
                  height={'20'}
                  layout="responsive"
                  alt="Happy-Customer"
                />
              </div>
              <div>
                <Image
                  src={'/happyCustomers3.PNG'}
                  width={'20'}
                  height={'20'}
                  layout="responsive"
                  alt="Happy-Customer"
                />
              </div>
            </div>
            <div className="h-24 w-28 flex flex-col space-y-12">
              <div>
                <Image
                  src={'/happyCustomers4.PNG'}
                  width={'20'}
                  height={'20'}
                  layout="responsive"
                  alt="Happy-Customer"
                />
              </div>
              <div>
                <Image
                  src={'/happyCustomers5.PNG'}
                  width={'20'}
                  height={'20'}
                  layout="responsive"
                  alt="Happy-Customer"
                />
              </div>
              <div>
                <Image
                  src={'/happyCustomers6.PNG'}
                  width={'20'}
                  height={'20'}
                  layout="responsive"
                  alt="Happy-Customer"
                />
              </div>
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
              <p>The best web studio</p>
              <span>in New York -</span>
              <span className="text-3xl font-normal">according</span>
            </div>

            <div className="text-3xl">
              <p>to magazine developer</p>
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
                  <p>Richard jacobson</p>
                </div>
                <div className="text-base font-normal leading-5 ml-2 text-gray-500">
                  <p>magazine editor</p>
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
