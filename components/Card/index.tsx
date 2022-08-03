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
      className={`w-80 h-60 xl:w-80 xl:h-60 2xl:w-96 2xl:h-80 hover:text-primaryGreenText  rounded-[200px] flex justify-center items-center   max-w-xl  bottom-1  ${
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

        <div className="text-sm font-bold xl:text-lg 2xl:text-2xl p-1">
          {title}
        </div>
        <div className="flex flex-wrap text-[10px] xl:text-sm 2xl:text-sm text-center p-2 font-normal hover:text-white">
          {description ? description : ''}
        </div>
      </div>
    </div>
  );
};

export default Card;
