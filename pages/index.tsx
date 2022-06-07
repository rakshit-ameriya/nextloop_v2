import type { NextPage } from 'next';
import Head from 'next/head';
import HappyCustomers from 'components/HappyCustomers';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextLoop</title>
        <meta name="description" content="Nextloop Technologies Pvt. Ltd." />
        <link rel="icon" href="/logo-white.jpg" />
      </Head>
      <HappyCustomers />
    </div>
  );
};

export default Home;
