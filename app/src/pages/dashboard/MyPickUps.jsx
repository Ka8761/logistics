import React from 'react'
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap'
import { FiSearch, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import DashboardFooter from './DashboardFooter'

const MyPickup = () => {
  return (
    <div>
      {/* Page Background */}
      <div className='p-5' style={{ backgroundColor: '#ebe9e9ff' }}>
        
        {/* Top Head Part */}
        <Row>
          <Col md={9} xs={12}>
            {/* My Pickups + Breadcrumb inline and button at the end */}
            <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-3">
              <div className="d-flex align-items-center gap-4">
                <h3 className="fw-bold mb-0">My Pickups</h3>
                <div className="d-flex gap-3">
                  <p className="mb-0" style={{ color: 'orange', cursor: 'pointer' }}>Home</p>
                  <p className="mb-0" style={{ color: 'orange', cursor: 'pointer' }}>Pickups</p>
                  <p className="mb-0" style={{ cursor: 'pointer' }}>View</p>
                </div>
              </div>
              <Button style={{ backgroundColor: 'orange', border: 'none' }}>
               <Link to='/pickup-form'style={{color:'black', textDecoration:'none'}}>Pickup Form</Link> 
              </Button>
            </div>

            {/* Order & Search - Same Line (Responsive) */}
            <Row className="align-items-center mb-3">
              <Col xs={12} md={6} className="mb-2 mb-md-0">
                <Form.Select>
                  <option value=''>Order by: Pickup No.</option>
                  <option value='PickupNumber'>Pickup No.</option>
                  <option value='Created'>Created</option>
                  <option value='Updated'>Updated</option>
                </Form.Select>
              </Col>
              <Col xs={12} md={6}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Search pickup number"
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

          {/* Right Side Status */}
          <Col md={3} className='shadow bg-white p-3'>
            <h4>Status:</h4>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-1">All Pickups</p>
              <FiChevronRight />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-1">Pending</p>
              <FiChevronRight />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-1">Processing</p>
              <FiChevronRight />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-1">In Transit</p>
              <FiChevronRight />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-1">Delivered to Warehouse</p>
              <FiChevronRight />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-1">Cancelled</p>
              <FiChevronRight />
            </div>
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

export default MyPickup
