import React, {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import img1 from '../assets/Shopp.jpg'
import img2 from '../assets/Shop.jpg'
import { IoMdArrowForward } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css'

const ShopSmart = () => {
 useEffect(() => {
  AOS.init({ once: true });
  AOS.refresh();
}, []);
  return (
    <>
    <div className='container py-5'>
        <div className='row align-items-center p-5' data-aos='fade-up' data-aos-anchor-placement="top-bottom">
        <div className='col-12 col-md-6 mb-5'>
            <h2>Shop Smart & Save Bigger</h2>
            <p className='w-90'>
                Our platform allows you to do a smart shopping with SHOP4ME Services.</p>
            <Button style={{backgroundColor:'orange'}}>Explore <IoMdArrowForward/> </Button>
        </div>
        <div className='col-12 col-md-6'>
            <img src={img1} alt='image-shopping-cart' height='100%' width='90%'/>
        </div>
        </div>
    </div>

      <div className='container py-5'>
        <div className='row align-items-center p-5' data-aos="fade-up"
data-aos-duration="1500"
data-aos-delay="300"
>

            <div className='col-12 col-md-6 mb-5'>
            <img src={img2}  onLoad={() => AOS.refresh()} alt='image-shopping-cart' height='100%' width='90%'/>
             </div>
            <div className='col-12 col-md-6 mb-5'>
            <h2>Shop Direct from UK Online Stores</h2>
            <p className='w-90'>
                Our platform allows you to do a smart shopping with SHOP4ME Services..</p>
           </div>
       
        </div>
    </div>
    </>
  )
}

export default ShopSmart