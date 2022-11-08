import React, { useEffect } from 'react';
import Link from 'next/link';
import Constants from '../../constants';
import { TEXT_CONSTANTS } from '../../types/enum';
import { useRouter } from 'next/router';
import Footer from 'components/Footer';
import { useInView } from 'react-intersection-observer';

const Layout = (props: any) => {
  const router = useRouter();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  useEffect(() => {
    // console.log('router', entry);
    // router.push('/')
    if (inView && router.asPath == '/#solution') {
      router.push('/');
    } else if (inView && router.asPath == '/#aboutUs') {
      router.push('/');
    }
  }, [inView]);
  return (
    <div>
      <div
        ref={ref}
        className="w-full  2xl:h-24 absolute top-0 left-0 px-2 z-10"
      >
        <nav className=" w-full sm:w-[90%]  flex justify-between md:justify-evenly md:gap-x-36 flex-wrap  2xl:space-x-10 space-x-1 items-center p-2  mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-5">
          <a
            href="#"
            className="text-[12px] lg:text-2xl text-white md:text-3xl  2xl:text-5xl 2xl:font-bold font-semibold font-montserratBold tracking-wide"
          >
            {TEXT_CONSTANTS.NEXT}
            <span className=" text-white bg-clip-text ">
              {TEXT_CONSTANTS.LOOP}
            </span>
            <h5 className="text-[12px] font-light 2xl:text-xl">
              {TEXT_CONSTANTS.TECHNOLOGIES}
            </h5>
          </a>
          <div
            className={`text-white font-montserratBold font-bold text-[10px] sm:text-sm 2xl:text-2xl md:static md:bg-transparent md:flex items-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-14`}
          >
            <ul className="flex flex-row flex-wrap space-x-2 md:flex-row items-center  md:space-y-0 md:space-x-8 lg:md:-x-8">
              {Constants.Navigation.map(item => (
                <Link key={item.id} href={item.link ? item.link : '/'}>
                  <a
                    className={
                      router.asPath == item.link
                        ? `text-primaryGreenText hover:text-primaryGreenText`
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
      <Footer />
    </div>
  );
};

export default Layout;
