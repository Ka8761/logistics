import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { BsBoxSeam } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { LiaTruckPickupSolid } from "react-icons/lia";
import DashboardFooter from "./DashboardFooter";
import { useDispatch,useSelector } from "react-redux";
import SelectWarehouse, { warehouses } from "./components/SelectWarehouse";


const DashboardHome = () => {
    const {data} = useSelector((state)=>state.user)
  // const [fullname, setFullname] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [activeTab, setActiveTab] = useState("viewshipment");
  // const [display, setDisplay] = useState()

  // const dispatch = useDispatch()
  // function getProfilepic(){
  //   if(data?._id){
  //     return `http://localhost:5000/api/users/${data._id}/profile-pic?t=${Date.now()}`
  //   }
  // };
  
  return (
    <div className="">
       <div className="d-flex">

      <div className='p-5' style={{ backgroundColor: "#ebe9e9ff", height: "auto", width:'100vw'}}>
        <h2 style={{ borderBottom: "1px solid grey " }} className="mb-5">
          Home
        </h2>

        <Row className="mt-3 gap-5">
          {/*profile div*/}
          <Col
            xs={12}
            md={4}
            className="d-flex flex-column align-items-center justify-content-center rounded"
            style={{
              height: "300px",
              // minWidth: "40vw",
              backgroundColor: "#ffffffff",
            }}
          >
            <img
              src={`${process.env.REACT_APP_API_URL}/api/users/${data._id || data.id}/profile-pic?t=${Date.now()}`}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "2px solid orange",
                marginBottom: '1rem'
              }}
              alt="profile pic"
            />
            <h3 style={{ borderBottom: "1px solid grey" }}>{data.firstName} {data.lastName}</h3>
            <p style={{ borderBottom: "1px solid grey" }}>{data.email}</p>
            <p style={{ borderBottom: "1px solid grey" }}>{data.phoneNumber}</p>
            <div className="d-flex gap-2">
              <Button style={{ backgroundColor: "#ff9500ff", border: "none" }}>
                Change password
              </Button>
              <Button style={{ backgroundColor: "#029743ff", border: "none" }}>
                Complete your KYC
              </Button>
            </div>
          </Col>

          {/*Shopping Address div*/}
          <Col xs={12} md={5} className="bg-white rounded p-5">
            <h5>Your Shopping Address</h5>
            <hr></hr>
            {/* select warehouse*/}
            <div>
              <SelectWarehouse setSelectedWarehouse={setSelectedWarehouse} />

              <p
                style={{
                  backgroundColor: "#82ecffff",
                  color: "black",
                  marginTop: "15px",
                }}
              >
                {selectedWarehouse && selectedWarehouse.details.text}
              </p>
              {selectedWarehouse && (
                <div className="mt-3 p-4 bg-light rounded">
                  <h4>{selectedWarehouse.name}</h4>
                  <p>
                    <strong>City:</strong> {selectedWarehouse.details.city}
                  </p>
                  <p>
                    <strong>State:</strong> {selectedWarehouse.details.state}
                  </p>
                  <p>
                    <strong>Country:</strong>{" "}
                    {selectedWarehouse.details.country}
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    {selectedWarehouse.details.phoneNumber}
                  </p>
                  <p>
                    <strong>Address 1:</strong>{" "}
                    {selectedWarehouse.details.addressLine1}
                  </p>
                  <p>
                    <strong>Address 2:</strong>
                    {selectedWarehouse.details.addressLine2}
                  </p>
                </div>
              )}
            </div>
          </Col>
        </Row>

        {/*Refer a friend*/}
        <Row className="d-flex align-content-center gap-5 mt-5 ">
          <Col xs={12} md={5} className="bg-white p-5 rounded">
            <h2>Refer a friend</h2>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="friend's name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="friend's email" />
            </Form.Group>
            <Button className="me-2">Refer a friend</Button>
            <Button variant="secondary">Reset</Button>
          </Col>

          {/*Shipments and invoice div*/}
          <Col xs={12} md={5} className="bg-white p-5 rounded">
            <div className="d-flex gap-3">
              <h4
                onClick={() => setActiveTab("viewshipment")}
                style={{
                  color: activeTab === "viewshipment" ? "orange" : "black",
                  cursor: "pointer",
                  borderTop:
                    activeTab === "viewshipment" ? "3px solid #e9ab00ff" : "",
                }}
              >
                Shipments Waiting
              </h4>
              <h4
                onClick={() => setActiveTab("viewInvoices")}
                style={{
                  color: activeTab === "viewInvoices" ? "orange" : "black",
                  cursor: "pointer",
                  borderTop:
                    activeTab === "viewInvoices" ? "3px solid #e9ab00ff" : "",
                }}
              >
                Paid Invoice
              </h4>
            </div>
            <div className="p-5 gap-3">
              {activeTab === "viewshipment" && (
                <p>Here are your shipments...</p>
              )}
              {activeTab === "viewInvoices" && (
                <p>Here are your paid invoices...</p>
              )}
            </div>
          </Col>
        </Row>
        {/*Number of things div*/}
        <div className="mt-5">
          <Row style={{ height: "150px", backgroundColor: "#ebe9e9ff" }}>
            <Col
              xs={12}
              md={3}
              className="me-5 rounded bg-white d-flex flex-column justify-content-center align-items-center"
            >
              <BsBoxSeam color="#ffba42ff" fontSize={24} />
              <p>Total Shipments</p>
              <p style={{ color: "#ffba42ff" }}>0</p>
            </Col>
            <Col
              xs={12}
              md={4}
              className="me-5 rounded bg-white d-flex flex-column justify-content-center align-items-center"
            >
              <FiShoppingCart color="#ffba42ff" fontSize={24} />
              <p>Total Procurements</p>
              <p style={{ color: "#ffba42ff" }}>0</p>
            </Col>
            <Col
              xs={12}
              md={3}
              className="me-5 rounded bg-white d-flex flex-column justify-content-center align-items-center"
            >
              <LiaTruckPickupSolid color="#ffba42ff" fontSize={34} />
              <p>Total Pickups</p>
              <p style={{ color: "#ffba42ff" }}>0</p>
            </Col>
          </Row>
        </div>
        <div className="p-5 flex-column" style={{ backgroundColor: "#ebe9e9ff" }}>
        {" "}
        <DashboardFooter />
      </div>
      </div>
      
      </div>
    </div>
  
    
  );
};

export default DashboardHome;
