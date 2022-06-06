import type { NextPage } from 'next';
import Head from 'next/head';
import Header from 'components/Header';
import OurServices from 'components/OurServices';
import WhyUs from 'components/WhyUs';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextLoop</title>
        <meta name="description" content="Nextloop Technologies Pvt. Ltd." />
        <link rel="icon" href="/logo-white.jpg" />
      </Head>
      <Header/>
      <OurServices/>
      <WhyUs/>
    </div>
  );
};

export default Home;
