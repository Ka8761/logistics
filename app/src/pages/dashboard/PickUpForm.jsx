import React, { useRef, useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import DashboardFooter from './DashboardFooter'

const PickupForm = () => {
  const uploadRef = useRef(null)
  const [preview, setPreview] = useState('')

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) setPreview(URL.createObjectURL(file))
  }

  const handleUploadClick = () => {
    uploadRef.current.click()
  }

  return (
    <div className="container my-4">
      {/* Header */}
      <div className="p-3 rounded" style={{ backgroundColor: '#e9e9e9' }}>
        <h4 className="mb-2 fw-bold">Pickup Form</h4>
        <div className="d-flex gap-2 small flex-wrap">
          <span style={{ color: 'orange', cursor: 'pointer' }}>Home</span>
          <span style={{ color: 'orange', cursor: 'pointer' }}>Pickups</span>
          <span style={{ cursor: 'pointer' }}>New</span>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white p-3 p-md-4 mt-3 rounded shadow-sm">
        <Form>
          {/* Delivery / Receiving Warehouse */}
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6}>
              <Form.Label>
                Delivery / Receiving Warehouse <span style={{ color: 'red' }}>*</span>
              </Form.Label>
              <Form.Select required>
                <option>TX (Stafford, Texas, USA)</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} xs={12} md={6} className="mt-3 mt-md-0">
              <Form.Label>Your Warehouse Address:</Form.Label>
              <p className="mb-0 small text-muted">
                4258 Bluebonnet Dr<br />
                Unit C14635,<br />
                Stafford, Texas 77477<br />
                United States.
              </p>
            </Form.Group>
          </Row>

          {/* Pickup Type */}
          <Form.Group className="mb-3">
            <Form.Label>
              Pickup Type <span style={{ color: 'red' }}>*</span>
            </Form.Label>
            <Form.Select>
              <option>General Merchandise</option>
            </Form.Select>
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-3">
            <Form.Label>
              Description <span style={{ color: 'red' }}>*</span>
            </Form.Label>
            <Form.Control as="textarea" rows={2} placeholder="Enter the Item Description" required />
          </Form.Group>

          {/* Dimensions */}
          <Row className="mb-3">
            <Form.Group as={Col} xs={6} md={3}>
              <Form.Label>Qtty *</Form.Label>
              <Form.Control type="number" defaultValue={1} required />
            </Form.Group>
            <Form.Group as={Col} xs={6} md={3}>
              <Form.Label>Length (lb) *</Form.Label>
              <Form.Control type="number" defaultValue={0} required />
            </Form.Group>
            <Form.Group as={Col} xs={6} md={3}>
              <Form.Label>Width (lb) *</Form.Label>
              <Form.Control type="number" defaultValue={0} required />
            </Form.Group>
            <Form.Group as={Col} xs={6} md={3}>
              <Form.Label>Height (lb) *</Form.Label>
              <Form.Control type="number" defaultValue={0} required />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Weight (lb) *</Form.Label>
            <Form.Control type="number" defaultValue={0} required />
          </Form.Group>

          {/* File Upload */}
          <Form.Group className="mb-3">
            <Form.Label>Upload Product Image</Form.Label>
            <div
              onClick={handleUploadClick}
              className="border p-3 text-center rounded"
              style={{ cursor: 'pointer' }}
            >
              <p className="mb-0 small">
                Click here to Upload. You can drag & drop too.
              </p>
              <input
                type="file"
                ref={uploadRef}
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>

            {preview && (
              <div className="mt-3">
                <p className="fw-bold mb-1">Preview:</p>
                <img
                  src={preview}
                  alt="Preview"
                  className="img-fluid"
                  style={{
                    maxWidth: '120px',
                    height: 'auto',
                    borderRadius: '8px',
                  }}
                />
              </div>
            )}
          </Form.Group>

          {/* Pickup Location */}
          <h5 className="mt-4">Pickup Location</h5>

          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6}>
              <Form.Label>Contact Name *</Form.Label>
              <Form.Control required />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6} className="mt-3 mt-md-0">
              <Form.Label>Contact Phone Number *</Form.Label>
              <Form.Control placeholder="e.g +1 111 1111" required />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6}>
              <Form.Label>Contact E-Mail</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={6} className="mt-3 mt-md-0">
              <Form.Label>Address Line 1 *</Form.Label>
              <Form.Control required />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={4}>
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} xs={12} md={4} className="mt-3 mt-md-0">
              <Form.Label>State / Province *</Form.Label>
              <Form.Select>
                <option>Choose State/Province/Region</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} xs={12} md={4} className="mt-3 mt-md-0">
              <Form.Label>Country *</Form.Label>
              <Form.Select>
                <option>United States</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control />
          </Form.Group>

          {/* Extra Information */}
          <Form.Group className="mb-3">
            <Form.Label>Extra Information</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Please share extra information that we may need to make this pickup here."
            />
          </Form.Group>

          {/* Buttons */}
          <div className="d-flex flex-column flex-md-row gap-3 mt-4">
            <Button style={{ backgroundColor: 'orange', border: 'none' }}>
              Create Pickup
            </Button>
            <Button variant="secondary">Reset</Button>
          </div>
        </Form>
      </div>

      <div className="mt-4">
        <DashboardFooter />
      </div>
    </div>
  )
}

export default PickupForm
