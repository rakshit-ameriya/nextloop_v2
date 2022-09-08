import React from 'react';
import Card from 'components/Card';
import { TEXT_CONSTANTS } from 'types/enum';

const Solutions = () => {
  const CARD_DATA = [
    {
      id: 1,
      title: 'Technical Support',
      image: '/images/cloudcomputing.svg',
      description: TEXT_CONSTANTS.TECH_SUPPORT,
    },
    {
      id: 2,
      title: 'Web Development',
      image: '/images/webdevelopment.svg',
      description: TEXT_CONSTANTS.DESCRIPTION,
    },
    {
      id: 3,
      title: 'Mobile Development',
      image: '/images/mobiledevelopment.svg',
      description: TEXT_CONSTANTS.MOBILE_APP_DEVELOPMENT,
    },
  ];
  return (
    <div className="w-full min-h-[70vh] mt-24">
      <div className="">
        <h1 className="text-center text-2xl xl:text-3xl 2xl:text-4xl font-bold ">
          {' '}
          {TEXT_CONSTANTS.SOLUTIONS}
        </h1>
        <h1 className="text-center">{TEXT_CONSTANTS.WE_COMMIT_DESIRING}</h1>
      </div>

      <div className="flex justify-center flex-col items-center md:flex-row space-y-10 mt-5  sm:space-y-5  sm:space-x-4 pb-10  px-4 sm:px-0">
        {CARD_DATA.map(item => (
          <Card
            key={item.id}
            title={item.title}
            className="bg-white-400 hover:bg-[#010028] border"
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Solutions;
