import React from 'react';
import Link from 'next/link';
import Constants from '../../constants';
import { TEXT_CONSTANTS } from '../../types/enum';
import { useRouter } from 'next/router';

const Layout = (props: any) => {
  const router = useRouter();
  return (
    <div>
      <div className="w-full h-24 bg-transparent z-10 absolute top-0">
        <nav className="flex justify-center sm:justify-evenly sm:space-x-40 space-x-40 items-start py-4 px-4 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-5">
          <a
            href="#"
            className="lg:text-2xl text-white md:text-3xl font-semibold tracking-wide"
          >
            {TEXT_CONSTANTS.NEXT}
            <span className=" text-white bg-clip-text ">
              {TEXT_CONSTANTS.LOOP}
            </span>
            <h5 className="text-xs font-light">
              {TEXT_CONSTANTS.TECHNOLOGIES}
            </h5>
          </a>
          <div
            className={`text-white font-semibold text-sm md:static md:bg-transparent md:flex items-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-14`}
          >
            <ul className="flex flex-col  space-y-5 md:flex-row items-center  md:space-y-0 md:space-x-8 lg:md:-x-8">
              {Constants.Navigation.map(item => (
                <Link key={item.id} href={item.link ? item.link : '/'}>
                  <a
                    className={
                      router.asPath == item.link
                        ? `text-[#0AD4A5] hover:text-[#0AD4A5]`
                        : `text-white`
                    }
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
