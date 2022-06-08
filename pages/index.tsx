import type { NextPage } from 'next';
import Head from 'next/head';
import Header from 'components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextLoop</title>
        <meta name="description" content="Nextloop Technologies Pvt. Ltd." />
        <link rel="icon" href="/logo-white.jpg" />
      </Head>
      <Header/>
    </div>
  );
};

export default Home;
