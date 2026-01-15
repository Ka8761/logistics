import React from 'react'
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'
import DashboardFooter from './DashboardFooter'

const DashboardShipment = () => {
  return (
    <div>
      {/* Page Background */}
      <div className='p-5' style={{ backgroundColor: '#ebe9e9ff' }}>
        
        {/* Top Head Part */}
        <Row>
          <Col md={9} xs={12}>
            {/* My Shipments + Breadcrumb inline and close together */}
            <div className="d-flex align-items-center gap-4 mb-3">
              <h3 className="mb-0">My Shipments</h3>
              <div className="d-flex gap-3">
                <p className="mb-0" style={{ color: 'orange', cursor: 'pointer' }}>Home</p>
                <p className="mb-0" style={{ color: 'orange', cursor: 'pointer' }}>Shipment</p>
                <p className="mb-0" style={{ cursor: 'pointer' }}>View</p>
              </div>
            </div>

            {/* Order & Search - Same Line (Responsive) */}
            <Row className="align-items-center mb-3">
              <Col xs={12} md={6} className="mb-2 mb-md-0">
                <Form.Select>
                  <option value=''>Order by: Shipment No.</option>
                  <option value='ShipmentNumber'>Shipment No.</option>
                  <option value='Created'>Created</option>
                  <option value='Updated'>Updated</option>
                </Form.Select>
              </Col>
              <Col xs={12} md={6}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Search shipment number"
                  />
                  <Button variant="outline-warning">
                    <FiSearch />
                  </Button>
                </InputGroup>
              </Col>
            </Row>

            <hr />
            <p>No Record found to display</p>
          </Col>

          {/* Left Side Status */}
          <Col md={3} className='shadow bg-white p-3'>
            <h4>Status:</h4>
            <div><p>All Shipments</p></div>
            <div><p>In warehouse</p></div>
            <div><p>Packaged</p></div>
            <div><p>In Transit</p></div>
            <div><p>At Sorting Center</p></div>
            <div><p>Out of Delivery / Ready for pickup</p></div>
            <div><p>Delivered / Picked Up</p></div>
            <div><p>Cancelled</p></div>
          </Col>
        </Row>
      </div>

      {/* Footer */}
      <div className='p-5' style={{ backgroundColor: '#ebe9e9ff' }}>
        <DashboardFooter />
      </div>
    </div>
  )
}

export default DashboardShipment
