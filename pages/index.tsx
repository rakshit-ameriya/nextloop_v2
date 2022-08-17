import type { NextPage } from 'next';
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
      <Header />
      <OurServices />
      <WhyUs />
      <Solutions />
      <AboutUs />
      <HappyCustomers />
      <OurClinetsSay />
      <Letstalk />
    </div>
  );
};

export default Home;
