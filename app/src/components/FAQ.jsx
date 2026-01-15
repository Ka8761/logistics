import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import AOS from 'aos';
import 'aos/dist/aos.css'

const FAQ = () => {
  useEffect(()=>{
    AOS.init({
      duration:2000,
      once: true,
    })
  },[])
  return (
    <>
      <style>{`
        .accordion-button:not(.collapsed) {
          background-color: white !important;
          color: inherit;
          box-shadow: none;
        }

        .accordion-button:focus {
          box-shadow: none;
          background-color: white;
        }

        .accordion-button:hover {
          background-color: white;
        }

        .accordion-item {
          border-radius: 0.75rem !important; /* same as rounded-3 */
          overflow: hidden;
          border: none;
          background-color: white;
        }

        .accordion-body {
          background-color: white;
        }
      `}</style>

      <div className="bg-light">
        <div className="container d-flex flex-column flex-md-row py-5">

          <div className="d-flex flex-column align-items-start col-12 col-md-5 mb-4 mb-md-0 p-5">
            <div>
              <h1 className="mb-5">Frequently Asked Questions</h1>
            </div>
            <div>
              <Card>
                <Card.Header>More FAQs</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Have more questions? <span className='fw-bold'>Contact Us</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

       
          <div className="col-12 col-md-7">
            <Accordion defaultActiveKey={['0']} flush>
              <Accordion.Item eventKey="0" className="mb-3 w-100" data-aos='fade-up' >
                <Accordion.Header>Who is CargoExtra and what do they do?</Accordion.Header>
                <Accordion.Body className='text-muted'>
                  Cargo Extra is the leading international logistics company providing
                  fast and affordable shipping from the USA to Nigeria without hassle.
                  We also offer Export shipping from Nigeria to Nigeria to the USA. Whether
                  it’s managing your shipments from door-to-door or simply finding competitive rates for Air Shipping from any location in the USA to
                  anywhere in Nigeria, we have the experience to help you get there – wherever ‘there’ may be!
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="mb-3 w-100" data-aos='fade-up'>
                <Accordion.Header>What types of cargo does CargoExtra handle?</Accordion.Header>
                <Accordion.Body>
                 Cargo Extra is the leading international logistics company providing fast and affordable shipping 
                 from the USA to Nigeria without hassle. We also offer Export shipping from Nigeria to Nigeria to the USA. Whether it’s managing your shipments from door-to-door or simply finding competitive rates for Air Shipping from any location in the USA to anywhere in 
                 Nigeria, we have the experience to help you get there – wherever ‘there’ may be!
                </Accordion.Body>
              </Accordion.Item>
               <Accordion.Item eventKey="2" className="mb-3 w-100">
                <Accordion.Header>How can I track my shipment with CargoExtra?</Accordion.Header>
                <Accordion.Body>
                 Cargo Extra is the leading international logistics company providing fast and affordable shipping 
                 from the USA to Nigeria without hassle. We also offer Export shipping from Nigeria to Nigeria to the USA. Whether it’s managing your shipments from door-to-door or simply finding competitive rates for Air Shipping from any location in the USA to anywhere in 
                 Nigeria, we have the experience to help you get there – wherever ‘there’ may be!
                </Accordion.Body>
              </Accordion.Item>
               <Accordion.Item eventKey="3" className="mb-3 w-100">
                <Accordion.Header>Does CargoExtra offer international shipping services?</Accordion.Header>
                <Accordion.Body>
                Cargo Extra is the leading international logistics company providing fast and affordable shipping from the USA to Nigeria without hassle. We also offer Export shipping from Nigeria to Nigeria to the USA. Whether it’s managing your shipments from door-to-door or simply finding competitive rates for Air Shipping from any location in the USA to anywhere in Nigeria,
                we have the experience to help you get there – wherever ‘there’ may be!
                </Accordion.Body>
              </Accordion.Item>
               <Accordion.Item eventKey="4" className="mb-3 w-100">
                <Accordion.Header>How secure are CargoExtra warehouse facilities?</Accordion.Header>
                <Accordion.Body>
                Cargo Extra is the leading international logistics company providing fast and affordable shipping from the USA to Nigeria without hassle. We also offer Export shipping from Nigeria to Nigeria to the USA. Whether it’s managing your shipments from door-to-door or simply finding competitive rates for Air Shipping from any location in the USA to anywhere in Nigeria,
                we have the experience to help you get there – wherever ‘there’ may be!
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ
