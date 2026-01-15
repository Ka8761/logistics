import React from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { FiSearch, FiChevronRight } from "react-icons/fi";
import DashboardFooter from "./DashboardFooter";
import { Link } from "react-router-dom";

const MyProcurement = () => {
  return (
    <div style={{ backgroundColor: "#ebe9e9ff" }}>
      {/* Page Content */}
      <div className="p-3 p-md-5">
        <Row className="g-4">
          {/* LEFT CONTENT */}
          <Col lg={9} md={12}>
            {/* Header */}
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 mb-3">
              <div>
                <h3 className="fw-bold mb-2 mb-md-0">My Procurements</h3>

                {/* Breadcrumb */}
                <div className="d-flex flex-wrap gap-3">
                  <span style={{ color: "orange", cursor: "pointer" }}>
                    Home
                  </span>
                  <span style={{ color: "orange", cursor: "pointer" }}>
                    Procurements
                  </span>
                  <span style={{ cursor: "pointer" }}>View</span>
                </div>
              </div>

              <Button
                style={{ backgroundColor: "orange", border: "none" }}
              >
                <Link
                  to="/procurement-form"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Procurement Form
                </Link>
              </Button>
            </div>

            {/* Filters */}
            <Row className="align-items-center mb-3 g-2">
              <Col xs={12} md={6}>
                <Form.Select>
                  <option value="">Order by: Procurement No.</option>
                  <option value="ProcurementNumber">
                    Procurement No.
                  </option>
                  <option value="Created">Created</option>
                  <option value="Updated">Updated</option>
                </Form.Select>
              </Col>

              <Col xs={12} md={6}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Search procurement number"
                  />
                  <Button variant="outline-warning">
                    <FiSearch />
                  </Button>
                </InputGroup>
              </Col>
            </Row>

            <hr />
            <p className="text-muted">No Record found to display</p>
          </Col>

          {/* RIGHT SIDEBAR */}
          <Col lg={3} md={12}>
            <div className="shadow bg-white p-3 rounded">
              <h4 className="mb-3">Status</h4>

              {[
                "All Procurements",
                "Pending",
                "Approved",
                "Order Placed",
                "Delivered to Warehouse",
                "Cancelled",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="d-flex align-items-center justify-content-between py-1"
                >
                  <span>{item}</span>
                  <FiChevronRight />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>

      {/* Footer */}
      <div className="p-3 p-md-5">
        <DashboardFooter />
      </div>
    </div>
  );
};

export default MyProcurement;
