import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/carousel.module.css';

const Carousel = () => {
  const ImageData = [
    {
      id: 2,
      image: '/Rectangle.png',
      alt: 'loop-1',
    },
    {
      id: 3,
      image: '/Rectangle.png',
      alt: 'loop-2',
    },
  ];
  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
      <div className="w-full h-screen relative">
        <div
          id="demo"
          className="carousel slide bg-cover "
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators px-2.5 my-20 gap-3 flex justify-start flex-col ">
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
                src="/Rectangle.png"
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
