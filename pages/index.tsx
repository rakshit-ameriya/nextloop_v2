import type { NextPage } from 'next';
import Head from 'next/head';
import HappyCustomers from 'components/HappyCustomers';
import Header from 'components/Header';
import OurServices from 'components/OurServices';
import WhyUs from 'components/WhyUs';
import AboutUs from 'components/AboutUs';
import Letstalk from 'components/Letstalk';
import Solutions from 'components/Solutions';
import OurClinetsSay from 'components/OurClientsSay';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextLoop</title>
        <meta name="description" content="Nextloop Technologies Pvt. Ltd." />
        <link rel="icon" href="/logo-white.jpg" />
      </Head>
      <Header />
      <OurServices />
      <WhyUs />
      <AboutUs />
      <Solutions />
        <HappyCustomers />
      <OurClinetsSay />
      <Letstalk />
    </div>
  );
};

export default Home;
