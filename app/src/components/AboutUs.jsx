import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { FaCheckCircle } from "react-icons/fa";
import img1 from '../assets/Phoneabout.png';
import Card from 'react-bootstrap/Card';
import { FcApproval } from "react-icons/fc";
import AOS from 'aos';
import 'aos/dist/aos.css';



const AboutUs = () => {
  useEffect(()=>{
  AOS.init({
    duration: 1000,
    once: true
  })
},[])
  return (
    <>
    <div className='container py-5'>
    <div className='row align-items-center'>

        <div className="col-12 col-md-6 mb-4 mb-md-0" data-aos="slide-right">
        <Button variant="outline-warning" className="mb-3">Warning</Button>
        <h2 
  className="fw-bold text-start" 
  style={{
    fontSize: 'clamp(1.2rem, 5vw, 2rem)',
    lineHeight: '1.4',
  }}
>
  More Than Shipping: We are Your Logistics Partner
</h2>
        <p>At CargoExtra, we are committed to making global shipping easy, affordable,
            and stress-free for both individuals and businesses. Whether you are importing,
            exporting, or sourcing products through our procurement services,
            we are here to handle the logistics, so you can focus on what matters most
            <a href='#hhshh'>Read More</a></p>
            <ul className="list-unstyled">
              <li><FaCheckCircle className="text-success me-2" />Fast & Reliable Delivery</li>
               <li><FaCheckCircle className="text-success me-2" />Real-Time Tracking</li>
                <li><FaCheckCircle className="text-success me-2" />Affordable Pricing</li>
                 <li><FaCheckCircle className="text-success me-2" />12hrs Customer Support</li>
                  <li><FaCheckCircle className="text-success me-2" />Nationwide and Global Reach</li>
                   <li><FaCheckCircle className="text-success me-2" />Secure Handling</li>
            </ul>
    </div>
    
    <div className="col-12 col-md-6 text-center" data-aos="slide-left">
      <img src={img1} alt="About Us" className="img-fluid" style={{ width: '90%'}} />
    </div>
    </div>

    <div className='d-md-flex'>
     <Card style={{width: '18rem',margin: '2rem auto',boxShadow: '0 4px 10px rgba(0,0,0,0.1)'}}
      >
        <Card.Body>
          <div className="d-flex align-items-center">
            <FcApproval style={{ width: '50px', height: '50px', marginRight: '1rem' }} />
            <div>
              <Card.Title className="mb-1" style={{ fontSize: '1.5rem' }}>7K</Card.Title>
              <Card.Text className="mb-0">Warehouses Worldwide</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card style={{width: '18rem',margin: '2rem auto',boxShadow: '0 4px 10px rgba(0,0,0,0.1)'}}
      >
        <Card.Body>
          <div className="d-flex align-items-center">
            <FcApproval style={{ width: '50px', height: '50px', marginRight: '1rem' }} />
            <div>
              <Card.Title className="mb-1" style={{ fontSize: '1.5rem' }}>7K</Card.Title>
              <Card.Text className="mb-0">Warehouses Worldwide</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card style={{width: '18rem',margin: '2rem auto',boxShadow: '0 4px 10px rgba(0,0,0,0.1)'}}
      >
        <Card.Body>
          <div className="d-flex align-items-center">
            <FcApproval style={{ width: '50px', height: '50px', marginRight: '1rem' }} />
            <div>
              <Card.Title className="mb-1" style={{ fontSize: '1.5rem' }}>7K</Card.Title>
              <Card.Text className="mb-0">Warehouses Worldwide</Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
 
    </div>
  </div>
    </>
  )
}

export default AboutUs;