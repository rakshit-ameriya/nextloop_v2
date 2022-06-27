import Image from 'next/image';
import styles from '../../styles/carousel.module.css';

const Carousel = () => {
  const ImageData = [
    {
      id: 2,
      image: '/images/Rectangle.png',
      alt: 'loop-1',
    },
    {
      id: 3,
      image: '/images/Rectangle.png',
      alt: 'loop-2',
    },
  ];
  return (
    <div>
      <div className="w-full h-screen relative top-40 right-20 sm:top-72 sm:relative xl:relative xl:top-0 xl:left-0 2xl:relative 2xl:top-0">
        <div
          id="demo"
          className="carousel slide bg-cover relative"
          data-bs-ride="carousel"
        >
          <div className="absolute top-80 left-20 bottom-0 sm:absolute sm:top-1/2  xl:absolute xl:top-2/3 xl:left-5 2xl:absolute 2xl:left-36 2xl:bottom-0 carousel-indicators  gap-0 sm:flex justify-start sm:flex-col ">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>

          <div className={`carousel-inner ${styles.animateCarousel}`}>
            <div className="carousel-item active object-cover object-center ">
              <Image
                src="/images/Rectangle.png"
                height={230}
                width={500}
                alt="loop-3"
                layout="responsive"
                className="d-block w-full h-screen object-cover object-center"
              />
            </div>
            {ImageData.map(item => (
              <div
                key={item.id}
                className={`carousel-item object-cover object-center  `}
              >
                <Image
                  src={item.image}
                  height={230}
                  width={500}
                  layout="responsive"
                  alt={item.alt}
                  className="d-block w-full h-screen object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
