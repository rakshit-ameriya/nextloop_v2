import type { NextPage } from 'next';
import HappyCustomers from 'components/HappyCustomers';
import Header from 'components/Header';
import OurServices from 'components/OurServices';
import WhyUs from 'components/WhyUs';
import AboutUs from 'components/AboutUs';
import Letstalk from 'components/Letstalk';
import Solutions from 'components/Solutions';
import OurClinetsSay from 'components/OurClientsSay';
import Head from 'next/head';
import Styles from '../styles/home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nextloop Technologies</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <div className={`${Styles.homeBackgroundImg}`}>
        <Header />
        <OurServices />
        <WhyUs />
        <Solutions />
        <AboutUs />
        <HappyCustomers />
        <OurClinetsSay />
        <Letstalk />
      </div>
    </>
  );
};

export default Home;
