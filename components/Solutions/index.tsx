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
    <div className="w-full h-screen  flex justify-center items-center my-5  ">
      <div
        className={` relative bg-solutions_bg_image  bg-no-repeat bg-center  bg-cover  w-full h-screen  flex justify-center `}
      >
        <div className="absolute top-1 sm:absolute sm:top-16 xl:absolute xl:top-16 2xl:absolute 2xl:top-36  flex justify-center">
          <div className="relative bg-[#0AD4A5] w-28 h-3 xl:w-28 xl:h-3 2xl:w-44 2xl:h-4">
            <h1 className="absolute -bottom-2 p-1 text-2xl xl:text-3xl 2xl:text-4xl font-bold ">
              {TEXT_CONSTANTS.SOLUTIONS}
            </h1>
          </div>
        </div>
        <div className="text-center flex  flex-wrap absolute top-5 xl:absolute xl:top-28 2xl:absolute 2xl:top-48 sm:absolute sm:top-24">
          <p className="max-w-md text-[12px] xl:text-[14px] 2xl:text-lg 2xl:max-w-sm">
            {TEXT_CONSTANTS.LOREM_IPSUM_DOLAR_1}
          </p>
        </div>
        <div className="mt-20 sm:mt-10 flex flex-col justify-center items-center sm:flex-row space-x-0 xl:space-x-10 2xl:space-x-10 space-y-5 ">
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
  );
};

export default Solutions;
