import Card from 'components/Card';
import React, { useRef } from 'react';
import { TEXT_CONSTANTS } from 'types/enum';

const OurServices = () => {
  const CARD_DATA = [
    {
      id: 1,
      title: 'We Trust',
      image: '/images/cloudcomputing.svg',
      description: TEXT_CONSTANTS.WE_BELIEVE_THAT_FOR_GROWTH,
    },
    {
      id: 2,
      title: 'Curiosity',
      image: '/images/webdevelopment.svg',
      description: TEXT_CONSTANTS.TO_STAY_IN_THE_LOOP,
    },
    {
      id: 3,
      title: 'Discepline',
      image: '/images/mobiledevelopment.svg',
      description: TEXT_CONSTANTS.FEDALITY_TO_OUR_PROCESS,
    },
  ];
  const service = useRef<HTMLInputElement>(null);
  return (
    <div className="w-full" ref={service} id="ourvalues">
      <div className="bg-primaryBg border-none ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,32L80,37.3C160,43,320,53,480,80C640,107,800,149,960,154.7C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="flex justify-center">
        <h1 className="font-bold text-center text-[14px] md:text-3xl xl:text-3xl 2xl:text-4xl">
          {' '}
          {TEXT_CONSTANTS.OUR_VALUES}
        </h1>
      </div>
      <p className="text-sm 2xl:text-lg text-center">
        {TEXT_CONSTANTS.DELIVERING_BEST_EXPERIENCE}
      </p>

      <div className="flex justify-center flex-col items-center md:flex-row space-y-10 mt-5  sm:space-y-5  sm:space-x-4 pb-10 px-4 sm:px-0 ">
        {CARD_DATA.map(item => (
          <Card
            key={item.id}
            title={item.title}
            className="bg-white-400 hover:bg-primaryBg border "
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
