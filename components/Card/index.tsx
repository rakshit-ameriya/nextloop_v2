import React from 'react';
import Image from 'next/image';

interface CardInterface {
  title: string;
  description: string;
  image: string;
  className: string;
}
const Card = (props: CardInterface) => {
  const { title, description, image, className } = props;

  return (
    <div
      className={`w-80 h-60 xl:w-80 xl:h-60 2xl:w-96 2xl:h-72 hover:text-[#0AD4A5]  rounded-[200px] flex justify-center items-center   max-w-xl  bottom-1  ${
        className ? className : ''
      } border-[#444242]`}
    >
      <div className="flex justify-center items-center flex-col">
        <div>
          <Image
            className=""
            src={image}
            alt="icon-image"
            width={35}
            height={35}
          />
        </div>

        <div className="text-sm font-bold xl:text-md 2xl:text-xl">{title}</div>
        <div className="flex flex-wrap text-[10px] xl:text-md 2xl:text-[14px] text-center p-4 font-normal hover:text-white">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
