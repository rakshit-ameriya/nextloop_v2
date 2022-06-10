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
      <div className="w-full h-screen relative">
        <div
          id="demo"
          className="carousel slide bg-cover "
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators px-2.5 my-32 gap-0 flex justify-start flex-col ">
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
            <div className="carousel-item active ">
              <Image
                src="/images/Rectangle.png"
                height={230}
                width={500}
                alt="loop-3"
                layout="responsive"
                className="d-block w-full h-screen"
              />
            </div>
            {ImageData.map(item => (
              <div key={item.id} className={`carousel-item `}>
                <Image
                  src={item.image}
                  height={230}
                  width={500}
                  layout="responsive"
                  alt={item.alt}
                  className="d-block w-full h-screen"
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
