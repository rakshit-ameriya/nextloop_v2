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
    <>
      {/* background par start */}
      <div className="w-full h-96 -z-50 relative  bg-[#010028]  ">
        <div className="">
          <svg
            className="absolute top-56 sm:absolute sm:top-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,32L80,37.3C160,43,320,53,480,80C640,107,800,149,960,154.7C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      {/* background par end */}

      <div className="w-full h-screen  flex justify-center items-center md:absolute md:top-28 z-50   ">
        <div className="w-3/5  sm:p-10 bg-white max-h-fit overflow-hidden border-2 rounded-2xl shadow-md hover:shadow-none">
          {/* haeding start */}
          <div className="pl-5 mb-3">
            <h1 className="text-3xl font-bold">Lets Connect</h1>
            <h1 className="text-xs max-w-xs mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h1>
          </div>
          {/* haeding end */}
          <div className="flex flex-col justify-center items-center space-x-5 sm:flex-col md:flex-row">
            {/* form and adress content start */}
            <div className="w-full sm:w-full md:w-3/4">
              {/* form start */}
              <div>
                <form>
                  <div className="flex flex-col  md:space-x-2 mb-3 justify-center rounded-md pl-5 md:flex-row sm:flex-col">
                    <div className="w-full">
                      <label className="block">Full Name</label>
                      <input
                        type="text"
                        className="rounded-full p-1 w-full border-1"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block">Email</label>
                      <input
                        type="text"
                        className="rounded-full p-1 w-full border-1"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:space-x-2 mb-3 rounded-md pl-5 md:flex-row sm:flex-col">
                    <div className="w-full">
                      <label className="block">Phone Number</label>
                      <input
                        type="text"
                        className="rounded-full p-1 w-full border-1"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block">Company </label>
                      <input
                        type="text"
                        className="rounded-full p-1 w-full border-1"
                      />
                    </div>
                  </div>
                  <div className="w-full pl-5">
                    <label className="block">Comments</label>
                    <textarea
                      type="text"
                      className="rounded-md p-1 w-full h-32 border-1"
                    />
                  </div>
                  <div className="pl-5 w-full sm:w-3/4  mt-3">
                    <button
                      className="bg-green-300 w-full sm:w-3/4 text-white font-normal p-1 border-1 rounded-full"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="md:w-1/4 mt-2 md:mt-2 sm:mt-10 sm:w-3/4">
              {/* adress start */}

              <div className="flex space-x-5">
                <div>
                  {/* icons */}
                  <Image
                    src="/Location_Icon.png"
                    width={20}
                    height={20}
                    alt="Location Icon"
                  />
                </div>
                <div className="space-y-1">
                  {/* address */}

                  <h1 className="text-sm font-bold text-black">Indore, IN</h1>
                  <h1 className="text-xs font-normal">
                    Lorem Ispsum Tower 07, Rd, opp.
                  </h1>
                  <h1 className="text-xs font-normal">Lorem Complex</h1>
                  <h1 className="text-xs font-normal"> Indore (M.P) 45200</h1>
                </div>
              </div>
              <div className="flex space-x-5 mt-3">
                <div>
                  {/* icons */}
                  <Image
                    src="/Phone_Icon.png"
                    width={18}
                    height={18}
                    alt="Phone Icon"
                  />
                </div>
                <div className="">
                  {/* address */}

                  <h1 className="text-xs font-normal">+91 00000 00000</h1>
                </div>
              </div>
              <div className="flex space-x-5 mt-3">
                <div>
                  {/* icons */}
                  <Image
                    src="/Message_Icon.png"
                    width={15}
                    height={15}
                    alt="Message Icon"
                  />
                </div>
                <div className="">
                  {/* address */}

                  <h1 className="text-xs font-normal">hello@nextloop.com</h1>
                </div>
              </div>
              <div className="flex">
                {Images_DATA.map(img => (
                  <div
                    key={img.id}
                    className="w-3 h-3 mr-2 mt-3 cursor-pointer"
                  >
                    <Image
                      src={img.image}
                      width={5}
                      height={5}
                      alt={img.alt}
                      layout="responsive"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-3 max-w-xs max-h-fit">
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
      </div>
    </>
  );
};

export default contact;
