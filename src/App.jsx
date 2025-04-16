import './App.css';
import Navbar from './components/common/Navbar';
import DonationCarouselHero from './components/home/DonationCarouselHero';
import HowItWorks from './components/home/Howitworks';
import Count from './components/home/count';
import DynamicNeedSection from "./components/home/DynamicNeedSection.1";
import ProductList from './components/home/ProductList';

import './index.css';


function App() {
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
          <div className='mt-10 '>
            <ProductList />
          </div>
    
    
    </>
  );
}

export default App;
