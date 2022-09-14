import Image from 'next/image';
import styles from '../../styles/carousel.module.css';

const Carousel = () => {
  return (
    <>
      <div
        className={`max-w-[300px] h-[340px] sm:max-w-[250px] md:max-w-[600px] md:h-[600px] lg:max-w-[700px] lg:h-[500px] 2xl:max-w-[1200px]  2xl:h-[760px] relative  left-[0%] top-[32%] lg:top-[10%] lg:left-[20%] 2xl:left-[30%] 2xl:top-[20%] md:left-[3%] md:top-[40%] sm:left-[50%] sm:top-[40%] ${styles.animateCarousel}`}
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
