import type { NextPage } from 'next';
import Header from 'components/Header';
import OurServices from 'components/OurServices';
import WhyUs from 'components/WhyUs';
import AboutUs from 'components/AboutUs';
import Letstalk from 'components/Letstalk';
import Solutions from 'components/Solutions';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <OurServices />
      <WhyUs />
      <AboutUs />
      <Solutions />
      <Letstalk />
    </div>
  );
};

export default Home;
