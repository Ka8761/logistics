import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaWarehouse } from "react-icons/fa6";
import { MdFlightLand } from "react-icons/md";
import { FaShip } from "react-icons/fa6";
import { FaDoorOpen } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaHandHoldingDroplet } from "react-icons/fa6";

const serviceList = [
  {
    icon: <FaWarehouse size={50} color="orange" />,
    title: "Warehousing Services",
    text: "Secure storage, efficient distribution, and inventory management for your goods."
  },
  {
    icon: <FaShip size={50} color="orange" />,
    title: "Ocean Freight",
    text: "Reliable sea shipping with cost-effective solutions for large-volume cargo."
  },
  {
    icon: <MdFlightLand size={50} color="orange" />,
    title: "Air Freight",
    text: "Fast and secure international deliveries via top-tier air freight carriers."
  },
  {
    icon: <FaDoorOpen size={50} color="orange" />,
    title: "Door to Door",
    text: "End-to-end service that picks up and delivers right at your doorstep."
  },
  {
    icon: <FaBasketShopping size={50} color="orange" />,
    title: "Procurement Services",
    text: "We help source and ship products globally with ease and trust."
  },
  {
    icon: <FaHandHoldingDroplet size={50} color="orange" />,
    title: "Sensitive Cargo",
    text: "Handling of delicate or time-sensitive items with maximum care."
  },
];

const Services = () => {
  return (
    <div className="container py-5">

      <div className="text-center mb-5 p-5">
        <Button variant="outline-warning" className="mb-3">
          Our Services
        </Button>
        <h1>Our Logistics Services</h1>
        <p>More than logistics — we’re your reliable delivery partner.</p>
      </div>

       <div className="row p-5">
      {serviceList.map((aservice, index)=>
        <div key={index} className="col-12 col-md-6 mb-4 ">
            <Card className="h-100 shadow">
                <div className="d-flex mb-3">
                    <div className="p-3">{aservice.icon}</div>
                    <Card.Body className="flex-column">
                    <Card.Title>{aservice.title}</Card.Title>
                    <Card.Text>{aservice.text}</Card.Text>
                    </Card.Body>
                </div>
            </Card>
        </div>
    )
      }
    </div>
</div>
  )
}
export default Services;
