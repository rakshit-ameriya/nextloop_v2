import Card from 'components/Card';
import React from 'react';

const OurServices = () => {
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
    <div className="w-full">
      <div className="bg-[#010028] border-none ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,32L80,37.3C160,43,320,53,480,80C640,107,800,149,960,154.7C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="flex justify-center flex-col items-center sm:flex-row space-y-10 mt-5  sm:space-y-5  space-x-4 pb-10">
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
  );
};

export default OurServices;
