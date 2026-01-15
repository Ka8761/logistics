import React from 'react'
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap'
import { FiSearch, FiChevronRight } from 'react-icons/fi'
import DashboardFooter from './DashboardFooter'

const Billing = () => {
  return (
    <div>
      {/* Page Background */}
      <div className="p-5" style={{ backgroundColor: '#ebe9e9ff' }}>
        <Row>
          {/* Left side (content) */}
          <Col md={9} xs={12}>
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-3">
              <div className="d-flex align-items-center gap-4">
                <h3 className="fw-bold mb-0">My Invoices</h3>
                <div className="d-flex gap-3">
                  <p className="mb-0" style={{ color: 'orange', cursor: 'pointer' }}>Home</p>
                  <p className="mb-0" style={{ color: 'orange', cursor: 'pointer' }}>Invoices</p>
                  <p className="mb-0" style={{ cursor: 'pointer' }}>View</p>
                </div>
              </div>
            </div>

            {/* Order + Search Bar */}
            <Row className="align-items-center mb-3">
              <Col xs={12} md={6} className="mb-2 mb-md-0">
                <Form.Select>
                  <option value="">Order by: Invoice No.</option>
                  <option value="InvoiceNumber">Invoice No.</option>
                  <option value="Created">Created</option>
                  <option value="Updated">Updated</option>
                </Form.Select>
              </Col>
              <Col xs={12} md={6}>
                <InputGroup>
                  <Form.Control type="text" placeholder="Search invoice number" />
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
          <Col md={3} className="shadow bg-white p-3">
            <h4>Status:</h4>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-1">All Invoices</p>
              <FiChevronRight />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-1">Unpaid Invoices</p>
              <FiChevronRight />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-1">Paid Invoices</p>
              <FiChevronRight />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-1">Cancelled</p>
              <FiChevronRight />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="mb-1">Refunded</p>
              <FiChevronRight />
            </div>
          </Col>
        </Row>
      </div>

      {/* Footer */}
      <div className="p-5" style={{ backgroundColor: '#ebe9e9ff' }}>
        <DashboardFooter />
      </div>
    </div>
  )
}

export default Billing
