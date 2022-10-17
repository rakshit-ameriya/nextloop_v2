import React from 'react';
import Image from 'next/image';
import { TEXT_CONSTANTS } from 'types/enum';

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
      className={`w-80  h-60 md:w-96 md:h-72 lg:w-72 lg:h-56 xl:w-80 xl:h-60 2xl:w-[414px] 2xl:h-[290px] hover:text-primaryGreenText transition-all duration-300  rounded-[200px] flex justify-center items-center flex-wrap bottom-1 px-5 ${
        className ? className : ''
      } border-secondaryGrayText`}
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

        <div className="text-sm font-bold xl:text-lg 2xl:text-2xl p-1 ">
          {title}
        </div>
        <div className="">
          <h1 className="text-[12px] max-w-full md:text-[10px] xl:text-[11px] 2xl:text-[17px] text-center px-1 font-normal ">
            {description ? description : TEXT_CONSTANTS.DESCRIPTION}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
