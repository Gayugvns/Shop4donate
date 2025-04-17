import "../App.css";
import Navbar from '../components/common/Navbar';
import DonationCarouselHero from '../components/home/DonationCarouselHero';
import HowItWorks from '../components/home/Howitworks';
import AffiliateGrid from '../components/home/AffliateGrid';
import AffiliateDonation from '../components/home/AffiliateDonation';
import Count from '../components/home/count';
import DynamicNeedSection from "../components/home/DynamicNeedSection.1";
import ProductList from '../components/home/ProductList';
import NFTImpactShowcase from '../components/home/NFTImpactShowcase';
import TopImpactMakers from '../components/home/TopImpactMakers';

import '../index.css';
import HeroSection from '../components/home/HeroSection';
import Footer from '../components/common/Footer';




function Home() {
  return (
    <>
    <Navbar />
   
        <DonationCarouselHero/>

        <div className="mt-10">
          <Count />
       
        </div>
        
        <div className="mt-10">
          <HowItWorks />
       
        </div>
        <div className="mt-10">
          <DynamicNeedSection />
          </div>
          <div className="mt-10">
            <ProductList />
          </div>
    <div className='mt-10'>
      <AffiliateDonation />
    </div>
    <div className='mt-10'>

    <AffiliateGrid />
    </div>
    <div className='mt-10'>

    <NFTImpactShowcase />
    </div>
    <div className='mt-10'>
      <TopImpactMakers/>
    </div>
    <div className='mt-10'>
      <HeroSection/>
    </div>
    <Footer />
   

    
    </>
  );
}

export default Home;
