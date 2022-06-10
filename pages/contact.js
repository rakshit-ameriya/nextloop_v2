import React from 'react';
import Image from 'next/image';

const Images_DATA = [
  {
    id: 1,
    image: '/Youtube_Icon.png',
    alt: 'Youtube Icon',
  },
  {
    id: 2,
    image: '/Instagram_Icon.png',
    alt: 'Instagram Icon',
  },
  {
    id: 3,
    image: '/Facebook_Icon.png',
    alt: 'Facebook Icon',
  },
  {
    id: 4,
    image: '/Twitter_Icon.png',
    alt: 'Twitter Icon',
  },
];

const contact = () => {
  return (
    <div className=" rounded-3xl h-[700px] w-4/5 p-4 border-2 shadow-gray-300 ml-[170px] mt-[150px]">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="ml-10">
            <div>
              <h1 className="text-5xl font-bold text-black">Lets Connect</h1>
            </div>
            <div className="text-sm font-normal mt-3">
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </h1>
              <h1>do eiusmod tempor incididunt ut labore et dolore</h1>
              <h1> magna aliqua.</h1>
            </div>
          </div>
          <div className="mt-8 flex-row ml-10 flex">
            <div>
              {' '}
              <div className="mt-2">
                <label htmlFor="first">Full name</label>
                <input
                  className="rounded-3xl h-[40px] w-[370px] border-2 shadow-gray-300 "
                  type="text"
                  id="first"
                  name="first"
                />
              </div>
            </div>
            <div>
              {' '}
              <div className="mt-2 ml-4">
                <label htmlFor="first">Email</label>
                <input
                  className="rounded-3xl h-[40px] w-[370px] border-2 shadow-gray-300"
                  type="text"
                  id="first"
                  name="first"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex-row ml-10 flex">
            <div>
              {' '}
              <div>
                <label htmlFor="first">Phone Number</label>
                <input
                  className="rounded-3xl h-[40px] w-[370px] border-2 shadow-gray-300"
                  type="text"
                  id="first"
                  name="first"
                />
              </div>
            </div>
            <div>
              {' '}
              <div className="ml-4">
                <label htmlFor="first">Company</label>
                <input
                  className="rounded-3xl h-[40px] w-[370px] border-2 shadow-gray-300"
                  type="text"
                  id="first"
                  name="first"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 ml-10">
            {' '}
            <label htmlFor="Comments">Comments</label>
            <div>
              <input
                className="rounded-3xl h-[188px] w-[760px] border-2 shadow-gray-300 text-xs"
                type="text"
                id="Comment"
                name="Comment"
              />
            </div>
            <div
              className="text-white text-base rounded-3xl h-[40px] w-[300px] border-2 
        shadow-gray-300 mt-4 bg-emerald-400 items-center"
            >
              <button className="ml-[120px] pt-1">Send</button>
            </div>
          </div>
        </div>

        <div></div>
        <div className="mt-44">
          <div className="flex ">
            <div className="flex justify-center space-x-5">
              <div>
                <Image
                  src="/Location_Icon.png"
                  width={20}
                  height={20}
                  alt="Location Icon"
                />
              </div>
              <div>
                <h1 className="text-sm font-bold text-black">Indore, IN</h1>
                <h1 className="text-sm font-normal">
                  Lorem Ispsum Tower 07, Rd, opp.
                </h1>
                <h1 className="text-sm font-normal">Lorem Complex</h1>
                <h1 className="text-sm font-normal"> Indore (M.P) 45200</h1>
              </div>
            </div>
          </div>

          <div className="flex mt-3">
            <div className="flex justify-center space-x-5 ">
              <div>
                <Image
                  src="/Phone_Icon.png"
                  width={20}
                  height={20}
                  alt="Phone Icon"
                />
              </div>
              <div>
                <h1 className="text-sm font-normal">+91 00000 00000</h1>
              </div>
            </div>
          </div>

          <div className="flex mt-3">
            <div className="flex justify-center space-x-5 ">
              <div>
                <Image
                  src="/Message_Icon.png"
                  width={20}
                  height={20}
                  alt="Message Icon"
                />
              </div>
              <div>
                <h1 className="text-sm font-normal">hello@nextloop.com</h1>
              </div>
            </div>
          </div>
          <div className="flex md:justify-start md:flex-row mt-3">
            {Images_DATA.map(img => (
              <div key={img.id} className=" mr-3">
                <Image src={img.image} width={15} height={15} alt={img.alt} />
              </div>
            ))}
          </div>
          <div className="mt-3 w-300 h-150">
            <Image
              src="/Map_Icon.png"
              width={300}
              height={130}
              alt="Map Icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
