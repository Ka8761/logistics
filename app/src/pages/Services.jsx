import React, { useEffect } from "react";
import img from "../assets/plane.jpg"
import ship from '../assets/ship.jpg'
import { BsPatchCheckFill } from "react-icons/bs";
import warehouse from "../assets/warehouse.jpg";
import globe from '../assets/globe.jpg';
import doorstep from '../assets/doorstep.jpg';
import Button from 'react-bootstrap/Button';
import shopp from '../assets/Shopp.jpg';
import person from '../assets/person.jpg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Services = () => {
  useEffect(()=>{
    AOS.init({
      duration:'3000',
      once:true,
    })
  },[])
 
  return (
    <div>
      <Navbar/>
    <div>
    <section className="container d-flex flex-column py-5 text-center align-items-center justify-content-center"
     style={{height:'70vh'}}>
      <h1
        style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)", fontWeight: "bold" }}
      >
       Get a free address in 30 secs
      </h1>
      <p style={{ fontSize: "clamp(0.7rem, 2.5vw, 1.25rem)", maxWidth: "700px", margin: "0 auto" }}>
        From small parcels to global freight — we handle logistics so you can
        focus on growing your business. Explore our full range of services
        below.
      </p>
    </section>
       
    <div className="container py-5 p-5">
        <div >
        {/* another major div */}
      <div  className="row align-items-start">
         <div className="col-12 col-md-6">
            <img src={img} alt="Air shipping" width='400px' height='100%'/>
        </div>
        <div className="col-12 col-md-6 mt-5">
            <h1>
            <span style={{ display: 'inline-block',width:'3px', backgroundColor:'orange', height:'30px', marginRight: '20px'}}></span>
            Air Shipping</h1>
            <p>We partner with top airlines and globally recognized freight forwarders
                to provide fast and reliable shipping for time-sensitive deliveries worldwide.</p>
            <div className="mb-5">
           
                <li className="d-flex gap-3 align-items-start"
                style={{listStyle:'none'}} data-aos='fade-up' >
                  <div>
                      <BsPatchCheckFill color="green"/>
                  </div>
              
                <div>
                <p className="fw-bold mb-1" >Economy</p>
                <p className="mb-0" >Cost-effective shipping for non-urgent deliveries.</p>
                </div>
                </li>

                   <li className="d-flex gap-3 align-items-start"
                style={{listStyle:'none'}} data-aos='fade-up' data-aos-delay='500'>
                  <div>
                      <BsPatchCheckFill color="green"/>
                  </div>
              
                <div>
                <p className="fw-bold mb-1">Priority</p>
                <p className="mb-0">A balanced option for faster delivery at a moderate price.</p>
                </div>
                </li>

                   <li className="d-flex gap-3 align-items-start"
                style={{listStyle:'none'}} data-aos='fade-up' data-aos-delay='1000'>
                  <div>
                      <BsPatchCheckFill color="green"/>
                  </div>
              
                <div>
                <p className="fw-bold mb-1">Express</p>
                <p className="mb-0">Rapid shipping for time-sensitive items, ensuring the quickest delivery possible..</p>
                </div>
                </li>
            </div>
        </div>
        </div>
           {/* another major div */}
            <div className="container py-5 d-flex mt-5 ">
              <div className="row align-items-center ">
              <div className="col-12 col-md-6 " >
                <h1  data-aos='fade-up' data-aos-delay='250'>
                  <span
                  style={{display:'inline-block', width:'3px', height:'30px', backgroundColor:'orange', marginRight:'10px'}}></span>
                  Sea Shipping</h1>
                  <p  data-aos='fade-up' data-aos-delay='250'>Our sea shipping service is ideal for bulk goods, providing a secure and cost-effective way to transport your items across the globe.
                    We manage shipments from key international locations, ensuring safe and timely delivery to Nigeria:</p>
                  <div>
                    <div className="d-flex gap-3 mb-3 align-items-center"
                     data-aos='fade-up' data-aos-delay='400'>
                      <BsPatchCheckFill color='green' size={20}/>
                      <p className="fw-bold mb-0">From the UK</p>
                    </div>
                    
                       <div className="d-flex gap-3 mb-3 align-items-center"
                        data-aos='fade-up' data-aos-delay='800'>
                      <BsPatchCheckFill color='green' size={20}/>
                      <p className="fw-bold mb-0">From the USA</p>
                    </div>
                       <div className="d-flex gap-3 mb-3 align-items-center data-aos='fade-up"
                        data-aos='fade-up' data-aos-delay='1100'>
                      <BsPatchCheckFill color='green' size={20}/>
                      <p className="fw-bold mb-0">From the CHINA</p>
                    </div>
                  </div>
              </div>
              <div className="col-12 col-md-6  " 
              data-aos='fade-up' data-aos-delay='200'>
                <img src={ship} alt="Sea shipping" width='400px' height='100%'/>
              </div>
            </div>      
        </div>

            {/* another major div */}
            <div className="container py-5 mt-5">
              <div className="row ">
                 <div className="col-12 col-md-6 mt-5"
                  data-aos='fade-up' data-aos-delay='200'>
                  <img src={warehouse} alt="warehouse" height='100%' width='400px'/>
                 </div>
           <div className="col-12 col-md-6 mt-5">
            <h1  data-aos='fade-up' data-aos-delay='250'>
            <span style={{ display: 'inline-block',width:'3px', backgroundColor:'orange', height:'30px', marginRight: '20px'}}></span>
            Warehousing Services</h1>
            <p  data-aos='fade-up' data-aos-delay='250'>With our secure and insured facilities, we offer organized storage, efficient distribution, and inventory
              management, ensuring your goods are safe, accessible, and well-managed at all times.</p>
            <div className="mb-5">
           
                <li className="d-flex gap-3 align-items-start"
                style={{listStyle:'none'}}  data-aos='fade-up' data-aos-delay='500'>
                  <div>
                      <BsPatchCheckFill color="green"/>
                  </div>
              
                <div>
                <p className="fw-bold mb-1">Economy</p>
                <p className="mb-0">Cost-effective shipping for non-urgent deliveries.</p>
                </div>
                </li>
                <li className="d-flex gap-3 align-items-start"
                style={{listStyle:'none'}}  data-aos='fade-up' data-aos-delay='1000'>
                  <div>
                      <BsPatchCheckFill color="green"/>
                  </div>
              
                <div>
                <p className="fw-bold mb-1">Priority</p>
                <p className="mb-0">A balanced option for faster delivery at a moderate price</p>
                </div>
                </li>
                <li className="d-flex gap-3 align-items-start"
                style={{listStyle:'none'}}  data-aos='fade-up' data-aos-delay='1300'>
                  <div>
                      <BsPatchCheckFill color="green"/>
                  </div>
              
                <div>
                <p className="fw-bold mb-1" >Express</p>
                <p className="mb-0">Rapid shipping for time-sensitive items, ensuring the quickest delivery possible.</p>
                </div>
                </li>
              </div>
            </div></div></div>

             {/* another major div */}
        <div className="d-flex mt-5">
        <div className="row align-items-center">
    
    {/* Left column */}
    <div className="col-12 col-md-6">
      <h1  data-aos='fade-up' data-aos-delay='200'>
        <span
          style={{
            display: "inline-block",
            width: "3px",
            height: "30px",
            backgroundColor: "orange",
            marginRight: "10px"
          }}
        ></span>
        Custom Clearing
      </h1>
      <p  data-aos='fade-up' data-aos-delay='200'>
        We work with experts who ensure a smooth and efficient customs
        processing to avoid delays and extra charges.
      </p>

      {/* Option 1 */}
      <div className="d-flex gap-3 mb-3 align-items-baseline"  data-aos='fade-up' data-aos-delay='400'>
        <BsPatchCheckFill color="green" size={20} />
        <div>
          <p className="fw-bold mb-0">Economy</p>
          <p className="mb-0">
            Cost-effective shipping for non-urgent deliveries.
          </p>
        </div>
      </div>

      {/* Option 2 */}
      <div className="d-flex gap-3 mb-3 align-items-baseline"  data-aos='fade-up' data-aos-delay='900'>
        <BsPatchCheckFill color="green" size={20} />
        <div>
          <p className="fw-bold mb-0">Priority</p>
          <p className="mb-0">
            A balanced option for faster delivery at a moderate price.
          </p>
        </div>
      </div>

      {/* Option 3 */}
      <div className="d-flex gap-3 mb-3 align-items-baseline"  data-aos='fade-up' data-aos-delay='1500'>
        <BsPatchCheckFill color="green" size={20} />
        <div>
          <p className="fw-bold mb-0">Express</p>
          <p className="mb-0">
            Rapid shipping for time-sensitive items, ensuring the quickest delivery possible.
          </p>
        </div>
      </div>
    </div>

    {/* Right column */}
    <div  data-aos='fade-up' data-aos-delay='200' className="col-12 col-md-6 text-center">
      <img
        src={globe}
        alt="Warehouse"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  </div>
       </div>

       {/* another major div */}
          <div className="container py-5 mt-5">
              <div className="row ">
                 <div className="col-12 col-md-6 mt-5">
                  <img  data-aos='fade-up' data-aos-delay='200'
                  src={doorstep} alt="warehouse" height='100%' width='400px'/>
                 </div>
           <div className="col-12 col-md-6 mt-5">
            <h1  data-aos='fade-up' data-aos-delay='200'>
            <span style={{ display: 'inline-block',width:'3px', backgroundColor:'orange', height:'30px', marginRight: '20px'}}></span> 
         Doorstep Delivery</h1>
            <p  data-aos='fade-up' data-aos-delay='200'>We provide a convenient, end-to-end delivery, right to your home or business.</p>
            <div className="mb-5">
           
                <li className="d-flex gap-3 align-items-start"
                style={{listStyle:'none'}}
                 data-aos='fade-up' data-aos-delay='300'>
                  <div>
                      <BsPatchCheckFill color="green"/>
                  </div>
              
                <div>
                <p className="fw-bold mb-1">Economy</p>
                <p className="mb-0">Cost-effective shipping for non-urgent deliveries.</p>
                </div>
                </li>
                <li className="d-flex gap-3 align-items-start"
                style={{listStyle:'none'}}
                 data-aos='fade-up' data-aos-delay='500'>
                  <div>
                      <BsPatchCheckFill color="green"/>
                  </div>
              
                <div>
                <p className="fw-bold mb-1">Priority</p>
                <p className="mb-0">A balanced option for faster delivery at a moderate price</p>
                </div>
                </li>
                <li className="d-flex gap-3 align-items-start"
                style={{listStyle:'none'}}
                 data-aos='fade-up' data-aos-delay='700'>
                  <div>
                      <BsPatchCheckFill color="green"/>
                  </div>
              
                <div>
                <p className="fw-bold mb-1">Express</p>
                <p className="mb-0">Rapid shipping for time-sensitive items, ensuring the quickest delivery possible.</p>
                </div>
                </li>
              </div>
            </div></div></div>
          {/*another major div*/ }
           <div className="container py-5 mt-5">
              <div className="column ">
              
           <div className="col-12 col-md-6 mt-5">
            <h1  data-aos='fade-up' data-aos-delay='200'>
            <span  data-aos='fade-up' data-aos-delay='200' style={{ display: 'inline-block', width:'3px', backgroundColor:'orange', height:'30px', marginRight: '20px'}}></span> 
            You Shop, We Ship, You Receive.</h1>
            <p  data-aos='fade-up' data-aos-delay='200'>We understand the challenges of managing bulk orders and shipping, which is why we offer to shop for you and bring your goods to our warehouse. You simply pay for the items and shipping, and we take care of the rest.
              Your order will be delivered to your doorstep once the process is complete.</p>
            <div className="mb-5">
           
                <li className="d-flex gap-3 align-items-start"
                style={{listStyle:'none'}}
                 data-aos='fade-up' data-aos-delay='300'>
                  <div>
                      <BsPatchCheckFill color="green"/>
                  </div>
              
                <div>
                <p className="fw-bold mb-1">We Purchase for you</p>
                <p className="mb-0">Tell us what you need, and we’ll handle the entire purchase on your behalf</p>
                </div>
                </li>
                <li className="d-flex gap-3 align-items-start"
                style={{listStyle:'none'}}
                 data-aos='fade-up' data-aos-delay='500'>
                  <div>
                      <BsPatchCheckFill color="green"/>
                  </div>
              
                <div>
                <p className="fw-bold mb-1">Doorstep Delivery</p>
                <p className="mb-0">Once we’ve secured your items, we’ll ship them straight to your doorstep in Nigeria</p>
                </div>
                </li>
                <Button style={{backgroundColor:'#ff6600ff', marginTop:'3rem', border:'none'}}>Start Shipping</Button>
              </div>
            </div>
             <div className="col-12 col-md-12 mt-5">
                  <img  data-aos='fade-up' data-aos-delay='200' src={shopp} alt="warehouse" height='100%' width='100%'/>
                 </div>
            </div></div>
            {/*another div*/}
            <div className="container py-5 mt-5">
              <h1 style={{ textAlign:'center'}} data-aos='fade-up' data-aos-delay='200'>How to Ship with CargoExtra</h1>
              <p style={{textAlign:'center'}}  data-aos='fade-up' data-aos-delay='200'>Here are the simplest processes to shop and ship with CargoExtra</p>
            <div className="row ">
                 <div className="col-12 col-md-6 mt-5">
                  <img  data-aos='fade-up' data-aos-delay='200' src={person} alt="warehouse" height='100%' width='90%'/>
                 </div>
           <div className="d-flex col-12 col-md-6 mt-5">
            <div>
            <span  data-aos='fade-up' data-aos-delay='200'
            style={{ display: 'inline-block',width:'5px', backgroundColor:'orange', height:'40%', marginRight: '20px'}}></span> 
             <span  data-aos='fade-up' data-aos-delay='200'
             style={{ display: 'inline-block',width:'5px', backgroundColor:'#deddddff', height:'60%', marginRight: '20px', marginTop:'-10vh'}}></span> 
             </div>
            <div className="mb-5">
           
                <li  data-aos='fade-up' data-aos-delay='400' className="m-2 align-items-start"
                style={{listStyle:'none'}}>
                <div>
                <p className="fw-bold mb-1">Get a free address in 30 secs</p>
                <p className="mb-0">Register and get your own unique address. We offer four convenient locations
                  to choose from, including the United States, United Kingdom, China, and Nigeria</p>
                </div>
                </li>

                <li  data-aos='fade-up' data-aos-delay='900' className="m-2 align-items-start"
                style={{listStyle:'none'}}>
                <div>
                <p className="fw-bold mb-1">Shop online from our preferred locations</p>
                <p className="mb-0">Whether you want to shop online from any store of your choice
                  in our preferred locations, or initiate a delivery to our location, we've got you covered.</p>
                </div>
                </li>

                 <li  data-aos='fade-up' data-aos-delay='1100' className="m-2 align-items-start"
                style={{listStyle:'none'}}>
                <div>
                <p className="fw-bold mb-1">Use your address at checkout</p>
                <p className="mb-0">Set the assigned address we provide as your designated shipping address. Use this
                  address for all your purchases and packages, ensuring that they are received and processed promptly.</p>
                </div>
                </li>

                 <li  data-aos='fade-up' data-aos-delay='1300' className="m-2  align-items-start"
                style={{listStyle:'none'}}>
                <div>
                <p className="fw-bold mb-1">Select your preferred shipping method</p>
                <p className="mb-0">We offer a range of flexible shipping methods to suit your needs, so you can choose the option that works best for you based on how urgently you need your items delivered..</p>
                </div>
                </li>
              </div>
            </div>
            </div></div>
     </div>
    </div>
    
    </div>
    <Footer/>
    </div>
    
  );
};

export default Services;
