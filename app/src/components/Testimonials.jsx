import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import one from '../assets/one.jpg';
import two from '../assets/three.jpg';
import three from '../assets/four.jpg';
import four from '../assets/six.jpg';

// IMPORTANT: Choose ONE of the following imports depending on how Typewriter is exported
// Option A - if Typewriter.js has: export default function Typewriter() { ... }
// import Typewriter from './Typewriter';

// Option B - if Typewriter.js has: export const Typewriter = ... OR export function Typewriter() { ... }
import { Typewriter } from './Typewriter';   // ← most likely fix for "object" / white screen

import { HiOutlineArrowLeftCircle, HiOutlineArrowRightCircle } from "react-icons/hi2";

const peopleCards = [
  {
    image: one,
    name: 'Amina Yusuf',
    occupation: 'Logistics Coordinator',
    text: 'Amina ensures smooth shipment processing and coordinates deliveries across multiple regions.'
  },
  {
    image: two,
    name: 'David Chen',
    occupation: 'Freight Analyst',
    text: 'David optimizes shipping routes and provides insights that cut delivery costs by 20%.'
  },
  {
    image: three,
    name: 'Maria Gonzalez',
    occupation: 'Warehouse Manager',
    text: 'Maria manages inventory systems, ensuring accuracy and fast order fulfillment.'
  },
  {
    image: four,
    name: 'James Okoro',
    occupation: 'Customer Support Lead',
    text: 'James leads the support team, making sure every client query is resolved swiftly and professionally.'
  },
  {
    image: three,
    name: 'Fatima Bello',
    occupation: 'Procurement Specialist',
    text: 'Fatima sources and negotiates with suppliers, ensuring timely acquisition of high-quality goods.'
  }
];

const Testimonials = () => {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
//   };

//   const scrollRight = () => {
//     scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
//   };

  return (
    // <div className='text-center container py-5'>
    //   <div className='mb-5'>
    //     <Button variant='outline-warning'>
    //       <Typewriter />
    //     </Button>
    //     <h1>Real Feedback from Satisfied Customers</h1>
    //     <p>
    //       Discover what real clients have to say about how <br />
    //       our services have helped them achieve their goals <br />
    //       and manage their deliveries effortlessly.
    //     </p>
    //   </div>

    //   <div className="d-flex align-items-center justify-content-center gap-5">
    //     <HiOutlineArrowLeftCircle
    //       size={40}
    //       style={{ color: 'orange', cursor: 'pointer' }}
    //       onClick={scrollLeft}
    //     />

    //     <div
    //       ref={scrollRef}
    //       className="d-flex gap-3 px-2"
    //       style={{
    //         overflowX: 'auto',
    //         scrollBehavior: 'smooth',
    //         scrollbarWidth: 'none',  // Firefox
    //         msOverflowStyle: 'none', // IE
    //       }}
    //     >
    //       {peopleCards.map((person, index) => (
    //         <Card
    //           key={index}   // already fine here — index is unique within this list
    //           style={{
    //             width: '300px',
    //             flex: '0 0 auto',
    //             boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    //             textAlign: 'left',
    //             backgroundColor: 'rgba(128, 128, 128, 0.1)'
    //           }}
    //         >
    //           <Card.Body>
    //             <div className="d-flex align-items-start gap-3">
    //               <img
    //                 src={person.image}
    //                 alt={person.name}
    //                 style={{ width: '70px', height: '70px', borderRadius: '50%' }}
    //               />
    //               <div>
    //                 <Card.Title className="mb-1">{person.name}</Card.Title>
    //                 <h6 className="text-muted mb-2">{person.occupation}</h6>
    //               </div>
    //             </div>
    //             <Card.Text className="mt-3">{person.text}</Card.Text>
    //           </Card.Body>
    //         </Card>
    //       ))}
    //     </div>

    //     <HiOutlineArrowRightCircle
    //       size={40}
    //       style={{ color: 'orange', cursor: 'pointer' }}
    //       onClick={scrollRight}
    //     />
    //   </div>
    // </div>
    <div className="mb-5">
        <Button variant="outline-warning">
          [DEBUG] Typewriter is commented out
        </Button>
        <h1>Real Feedback from Satisfied Customers</h1>
        <p>
          This is a debug version.<br />
          If you see this text → Testimonials itself renders correctly.<br />
          → The crash is coming from something inside the original code.
        </p>
      </div>
  );
};

export default Testimonials;