import Image from 'next/image';
import React from 'react';
import Accordian from '../components/Accordian';
import {
  ionicAllRoleTitles,
  nextJsAllRoleTitles,
  frontEndLeadAllRoleTitles,
  BDIAllRoleTitles,
  HRInternAllRoleTitles,
} from '../constants';

const Career = () => {
  const jobDesc = [
    {
      id: 1,
      jobTitle: 'Ionic Developer',
      location: 'indore/remote',
      exp: '2+years of exp.',
      keySkills:
        'Experience in Ionic 6, Angular 13, Typescript, Stencil Js, NodeJS, HTML5, and CSS3.',
      allRoleTitles: ionicAllRoleTitles,
    },
    {
      id: 2,
      jobTitle: 'Next js Developer',
      location: 'indore/remote',
      exp: '2+years of exp.',
      keySkills:
        'JavaScript, Next Js, React JS, HTML5, and CSS3, Redux, Bootstrap, TypeScript',
      allRoleTitles: nextJsAllRoleTitles,
    },
    {
      id: 3,
      jobTitle: 'Front-End Lead Tech',
      location: 'indore/remote',
      exp: '4+years of exp.',
      keySkills:
        'JavaScript, CSS, HTML, and front-end languages.Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.',
      allRoleTitles: frontEndLeadAllRoleTitles,
    },
    {
      id: 4,
      jobTitle: 'BDI(Business Dev Intern)',
      location: 'indore/remote',
      exp: 'Fresher.',
      keySkills:
        'Proven working experience as a business development manager, sales executive or a relevant role',
      allRoleTitles: BDIAllRoleTitles,
    },
    {
      id: 5,
      jobTitle: 'Human Resources Intern',
      location: 'indore/pune',
      exp: 'Fresher.',
      keySkills:
        'Experience as a Staff Assistant or similar junior HR role is a plus',
      allRoleTitles: HRInternAllRoleTitles,
    },
  ];
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

        <div className="relative  xl:-top-36 2xl:-top-56  z-10 h-16 w-full ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,32L80,37.3C160,43,320,53,480,80C640,107,800,149,960,154.7C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="z-10  w-full sm:w-3/4 xl:w-1/2 2xl:w-1/3 absolute top-1/2 left-1/2  transform  -translate-x-1/2 -translate-y-1/2 ">
          <h1 className="sm:text-4xl text-center text-sm xl:text-4xl 2xl:text-5xl  text-white font-bold  font-montserrat p-2 ">
            Current Openings
          </h1>
          <p className="text-[8px] xl:text-[14px] 2xl:text-xl text-white   text-center mt-2 p-3 ">
            Join our team to transform what’s next. Work in a relaxed atmosphere
            and build a career by working on international Projects.
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center mb-10 mt-5 sm:mt-0 ">
        {jobDesc.map(item => (
          <Accordian
            key={item.id}
            jobTitle={item.jobTitle}
            location={item.location}
            exp={item.exp}
            keySkills={item.keySkills}
            allRoleTitles={item.allRoleTitles}
          />
        ))}
      </div>
    </>
  );
};

export default Career;
