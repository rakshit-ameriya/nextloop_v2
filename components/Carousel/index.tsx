import Image from 'next/image';
import styles from '../../styles/carousel.module.css';

const Carousel = () => {
  return (
    <>
      <div
        className={`max-w-[200px] h-[170px] sm:max-w-[250px] md:max-w-[600px] md:h-[600px] lg:max-w-[700px] lg:h-[500px] 2xl:max-w-[1200px]  2xl:h-[760px] relative  left-[10%] top-[60%] 2xl:left-[18%] md:left-[18%] md:top-24 sm:left-[50%] sm:top-[40%] ${styles.animateCarousel}`}
      >
        <Image
          src="/images/Rectangle.png"
          alt="loop-3"
          layout="fill"
          className="object-contain"
        />
      </div>
    </>
  );
};

export default Carousel;
