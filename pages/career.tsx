import Image from 'next/image';
import React from 'react';
import Accordian from '../components/Accordian';

const Career = () => {
  return (
    <>
      <div className="w-full h-3/4 relative top-0 -z-50 bg-[#010028]  ">
        <div className="mix-blend-normal opacity-30 bg-cover bg-center">
          <Image
            src="/images/group-discuss.jpg"
            width={1300}
            height={500}
            layout="responsive"
            alt="group-discuss"
            className="bg-cover bg-center"
          />
        </div>

        <div className="relative sm:relative top-5 sm:-top-52 z-10 h-16">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,32L80,37.3C160,43,320,53,480,80C640,107,800,149,960,154.7C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="z-10 sm:absolute sm:top-1/3 sm:left-1/3 absolute top-1/3  flex justify-center flex-col items-center">
          <h1 className="sm:text-4xl text-xl xl:text-4xl 2xl:text-5xl  text-white font-bold  font-montserrat p-2 ">
            Current Openings
          </h1>
          <p className="text-xs xl:text-md 2xl:text-xl text-white font-light max-w-md text-center mt-2 p-3 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center mb-10 mt-5 sm:mt-0 ">
        <Accordian
          jobTitle={'Ionic Developer'}
          location={'indore/pune'}
          exp={'2+years of exp.'}
        />
        <Accordian
          jobTitle={'Next js Developer'}
          location={'indore/pune'}
          exp={'2+years of exp.'}
        />
        <Accordian
          jobTitle={'Front-End Lead Tech'}
          location={'indore/pune'}
          exp={'4+years of exp.'}
        />
        <Accordian
          jobTitle={'BDI(Business Dev Intern)'}
          location={'indore/pune'}
          exp={'Fresher'}
        />
        <Accordian
          jobTitle={'Human Resources Intern'}
          location={'indore/pune'}
          exp={'Fresher.'}
        />
        {/* <div className="font-bold  text-[#7A7A7A] mt-5">
          <button className="text-xl">VIEW ALL OPENINGS {` >> `}</button>
        </div> */}
      </div>
    </>
  );
};

export default Career;
