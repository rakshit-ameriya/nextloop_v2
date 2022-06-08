import React from 'react';
import Card from 'components/Card';
import { TEXT_CONSTANTS } from 'types/enum';

const Solutions = () => {
  const CARD_DATA = [
    {
      id: 1,
      title: 'Cloud Computing',
      image: '/images/cloudcomputing.svg',
    },
    {
      id: 2,
      title: 'Web Development',
      image: '/images/webdevelopment.svg',
    },
    {
      id: 3,
      title: 'Mobile Development',
      image: '/images/mobiledevelopment.svg',
    },
  ];
  return (
    <div className="w-full h-screen  flex justify-center items-center">
      <div
        className={`relative bg-solutions_bg_image  bg-no-repeat bg-center  bg-contain w-full h-3/4   flex justify-center `}
      >
        <div className="absolute top-16 flex justify-center">
          <div className="relative bg-[#0AD4A5] w-28 h-3">
            <h1 className="absolute -bottom-2 p-1 text-2xl font-bold ">
              {TEXT_CONSTANTS.SOLUTIONS}
            </h1>
          </div>
        </div>
        <div className="text-center flex  flex-wrap absolute top-24">
          <p className="max-w-md text-[12px]">
            {TEXT_CONSTANTS.LOREM_IPSUM_DOLAR_1}
          </p>
        </div>
        <div className="flex justify-center items-center h-full ">
          <div className="mt-20 flex justify-center items-center space-x-4 pb-10 pt-16">
            {CARD_DATA.map(item => (
              <Card
                key={item.id}
                title={item.title}
                className="bg-white-400 hover:bg-[#010028] border"
                image={item.image}
                description={
                  'Lorem ipsum dolor sit amet,  fghyjj consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. '
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
