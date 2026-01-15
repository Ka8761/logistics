import Hero from '../components/Hero';
import Services from '../components/Services';
import LogoScroller from '../components/LogoScroller';
import ShopSmart from '../components/ShopSmart';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import StartShip from '../components/StartShip';
import Footer from '../components/Footer';


function Home() {
  return (
    <div className="App">
    <Hero/>
    <LogoScroller/>
    <Services/>
    <ShopSmart/>
    <Testimonials/>
    <FAQ/>
    <StartShip/>
    <Footer/>
    </div>
  );
}

export default Home;
