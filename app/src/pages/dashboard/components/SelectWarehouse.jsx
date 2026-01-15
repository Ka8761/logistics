import React, {useState} from "react";
import { Form } from "react-bootstrap";


export const warehouses = [
  {
    name: "UK-L (London, UK)",
    details: {
      addressLine1: "4258 Bluebonnet Dr",
      addressLine2: "Unit C14635",
      phoneNumber: "+12814028088",
      city: "Stafford",
      state: "London",
      country: "United KiNGDOM",
         currency:"GPE(e)",
      get text() {return `Please use the exact address below for Shopping so we can easily identify your Package. 
      The shipment would arrive at ${this.addressLine1}, UK`;
    }
    },
  },
  {
    name: "CHINA (CN)",
    details: {
      addressLine1: "No. 123, Nanjing Rd",
      addressLine2: "Warehouse B, shangaiii",
      phoneNumber: "+8613800138000",
      city: "Shanghai",
      state: "Shanghai",
      country: "China",
         currency:"USD($)",
         whAddress:'5, twin tower building, along Bein ju hyun Passage way, Shangai, China',
      get text(){return `Please use the exact address below for Shopping so we can easily identify your Package. 
        The shipment would arrive at ${this.addressLine1}, China`;}
    },
  },
  {
    name: "TX (Houston, US)",
    details: {
      addressLine1: "1500 Commerce St, Silicon Valley",
      addressLine2: "Suite 200, Corolado Street",
      phoneNumber: "+17135551234",
      city: "Houston",
      state: "Texas",
      country: "United States",
        whAddress:'16, coraldo street, Texas, Us',
         currency:"USD($)",
      get text(){return `Please use the exact address below for Shopping so we can easily identify your Package. 
        The shipment would arrive at ${this.addressLine1}, USA`;}
    },
  },
  {
    name: "SKR-Dimpko (South Korea)",
    details: {
      addressLine1: "88 Gangnam-daero, Kynug V",
      addressLine2: "Block C",
        whAddress:'opposite mtn office, mandela street , SKR',
      phoneNumber: "+821012345678",
      city: "Seoul",
      state: "Seoul",
        currency:"USD($)",
      country: "South Korea",
      get text(){return `Please use the exact address below for Shopping so we can easily identify your Package. 
        The shipment would arrive at ${this.addressLine1}, South-Korea`;}
    },
  },
  {
    name: "OJU (Ojuelagba, Lagos, Nigeria)",
    details: {
      addressLine1: "12 Ojuelagba Rd",
      addressLine2: "Floor 3",
      phoneNumber: "+2348012345678",
      city: "Lagos",
      state: "Lagos",
        whAddress:'23 dy lane, off Ahmadu Bello express, Lagos Nigeria',
      country: "Nigeria",
        currency:"Naira(N)",
      get text(){return `Please use the exact address below for Shopping so we can easily identify your Package. 
        The shipment would arrive at ${this.addressLine1}, Lagos`;}
    },
  },
  {
    name: "LOS (Isolo, Lagos, Nigeria)",
    details: {
      addressLine1: "55 Isolo Industrial Ave",
      addressLine2: "Warehouse 7",
      phoneNumber: "+2348098765432",
      city: "Lagos",
      state: "Lagos",
       whAddress:'No 22 Isolo Avenue, Lagos Nigeria',
      country: "Nigeria",
      currency:"Naira(N)",
      get text() {return `Please use the exact address below for Shopping so we can easily identify your Package. 
      The shipment would arrive at ${this.addressLine1}, Lagos`}
    },
  },
];
const SelectWarehouse = ({setSelectedWarehouse}) => {

  return (
    <div>
      <div>
        <p>Warehouse Options</p>
        <Form.Select
          className="border rounded p-2"
          onChange={(e) => {
            const wh = warehouses.find((w) => w.name === e.target.value);
            setSelectedWarehouse(wh);
          }}
        >
          <option value="">Select a warehouse</option>
          {warehouses.map((w, index) => (
            <option key={index} value={w.name}>
              {w.name}
            </option>
          ))}
        </Form.Select>
      </div>
    </div>
  );
};

export default SelectWarehouse;
