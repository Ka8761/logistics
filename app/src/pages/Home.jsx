import React from "react";
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
    <div 
      className="App" 
      style={{
        width: '100vw',
        maxWidth: '100vw',
        overflowX: 'hidden',  // ✅ FIX: No horizontal scroll
        margin: 0,
        padding: 0
      }}
    >
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
