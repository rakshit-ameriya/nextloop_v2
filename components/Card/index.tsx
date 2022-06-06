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
      className={`w-72 h-48 hover:text-[#0AD4A5]  rounded-[200px] flex justify-center items-center   max-w-xl  bottom-1  ${
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

        <div className="text-sm font-bold">{title}</div>
        <div className="flex flex-wrap text-[10px] text-center p-3 font-normal hover:text-white">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
