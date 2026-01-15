import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import SelectWarehouse, { warehouses } from './components/SelectWarehouse'
import DashboardFooter from './DashboardFooter'
import { useDispatch, useSelector } from "react-redux"
import { createProcurement } from '../../redux/procurementSlice'
import { Link } from 'react-router-dom'

const ProcurementForm = () => {
  const dispatch = useDispatch()
  const { loading, error, sucess } = useSelector((state) => state.procurement)

  const [selectedWarehouse, setSelectedWarehouse] = useState(null)
  const [addedCharges, setAddedCharges] = useState('')
  const [procurementType, setProcurementType] = useState('')
  const [quantity, setQuantity] = useState('')
  const [unitPrice, setUnitPrice] = useState('')
  const [productName, setProductName] = useState('')
  const [productLink, setProductLink] = useState('')
  const [storeName, setStoreName] = useState('')
  const [extraInfo, setExtraInfo] = useState('')
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')

  const uploadref = useRef(null)
  const [preview, setPreview] = useState('')

  const submitCreateProcurement = (e) => {
    e.preventDefault()

    const formData = {
      warehouse: warehouses,
      storeName,
      procurementType,
      productName,
      productLink,
      quantity,
      unitPrice,
      addedCharges,
      totalAmount: Number(quantity * unitPrice) + Number(addedCharges),
      extraInfo,
    }

    dispatch(createProcurement(formData))
  }

  const handleChangef = (e) => {
    const file = e.target.files[0]
    if (file) setPreview(URL.createObjectURL(file))
  }

  const handleClick = () => uploadref.current.click()

  return (
    <div className="container my-4">
      {/* Header */}
      <div className="p-3 rounded d-flex flex-wrap align-items-center gap-3" style={{ backgroundColor: '#e9e9e9' }}>
        <h4 className="mb-0">Procurement Form</h4>
        <div className="d-flex gap-2 small flex-wrap">
          <span style={{ color: 'orange', cursor: 'pointer' }}>Home</span>
          <Link to="/my-procurements" style={{ color: 'orange', textDecoration: 'none' }}>
            Procurements
          </Link>
          <span>New</span>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white p-4 mt-3 rounded shadow-sm">
        <Form className="row g-3" onSubmit={submitCreateProcurement}>
          <Form.Group className="col-12 col-md-6">
            <Form.Label>Procurement Warehouse *</Form.Label>
            <SelectWarehouse setSelectedWarehouse={setSelectedWarehouse} />
          </Form.Group>

          <Form.Group className="col-12 col-md-6">
            <Form.Label>Currency</Form.Label>
            <h5 className="mt-2">
              {selectedWarehouse ? selectedWarehouse.details.currency : '---'}
            </h5>
          </Form.Group>

          <hr />

          <div className="col-12">
            <h5>Your Warehouse Address</h5>
            <p className="mb-0">
              {selectedWarehouse ? selectedWarehouse.details.whAddress : 'No warehouse selected'}
            </p>
          </div>

          <Form.Group className="col-12 col-md-6">
            <Form.Label>Procurement Type</Form.Label>
            <Form.Select value={procurementType} onChange={(e) => setProcurementType(e.target.value)}>
              <option value="">General Merchandise</option>
              <option value="">Specific Merchandise</option>
            </Form.Select>
          </Form.Group>

          <hr />

          <Form.Group className="col-12 col-md-6">
            <Form.Label>Store Name *</Form.Label>
            <Form.Control value={storeName} onChange={(e) => setStoreName(e.target.value)} required />
          </Form.Group>

          <Form.Group className="col-12 col-md-6">
            <Form.Label>Product Name *</Form.Label>
            <Form.Control value={productName} onChange={(e) => setProductName(e.target.value)} required />
          </Form.Group>

          <Form.Group className="col-12 col-md-6">
            <Form.Label>Product Link *</Form.Label>
            <Form.Control value={productLink} onChange={(e) => setProductLink(e.target.value)} required />
          </Form.Group>

          <hr />

          <Form.Group className="col-12 col-md-4">
            <Form.Label>Size</Form.Label>
            <Form.Control value={size} onChange={(e) => setSize(e.target.value)} />
          </Form.Group>

          <Form.Group className="col-12 col-md-4">
            <Form.Label>Color</Form.Label>
            <Form.Control value={color} onChange={(e) => setColor(e.target.value)} />
          </Form.Group>

          <Form.Group className="col-12 col-md-4">
            <Form.Label>Amount</Form.Label>
            <p className="fw-bold">{quantity * unitPrice}</p>
          </Form.Group>

          <Form.Group className="col-12 col-md-6">
            <Form.Label>Quantity *</Form.Label>
            <Form.Control type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
          </Form.Group>

          <Form.Group className="col-12 col-md-6">
            <Form.Label>Unit Price *</Form.Label>
            <Form.Control type="number" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} required />
          </Form.Group>

          {/* Upload */}
          <Form.Group className="col-12 col-md-8">
            <Form.Label>Upload Package Image</Form.Label>
            <div className="border p-3 text-center rounded" style={{ cursor: 'pointer' }} onClick={handleClick}>
              Click to upload image
              <input type="file" ref={uploadref} hidden onChange={handleChangef} />
            </div>
          </Form.Group>

          {preview && (
            <div className="col-12 col-md-4 text-center">
              <p className="fw-bold">Preview</p>
              <img src={preview} alt="preview" style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8 }} />
            </div>
          )}

          <hr />

          <Form.Group className="col-12">
            <Form.Label>Extra Information</Form.Label>
            <Form.Control as="textarea" rows={3} value={extraInfo} onChange={(e) => setExtraInfo(e.target.value)} />
          </Form.Group>

          <Form.Group className="col-12 col-md-6">
            <Form.Label>Added Charges</Form.Label>
            <Form.Control type="number" value={addedCharges} onChange={(e) => setAddedCharges(e.target.value)} />
          </Form.Group>

          {addedCharges && (
            <div className="col-12">
              <p><strong>Subtotal:</strong> {quantity * unitPrice}</p>
              <p><strong>Added Charges:</strong> {addedCharges}</p>
              <p><strong>Total:</strong> {Number(quantity * unitPrice) + Number(addedCharges)}</p>
            </div>
          )}

          <div className="col-12 d-flex flex-wrap gap-3">
            <Button type="submit" style={{ backgroundColor: '#FF8C00', border: 'none' }}>
              Create Procurement
            </Button>
            <Button variant="secondary">Reset</Button>
          </div>
        </Form>
      </div>

      <DashboardFooter />
    </div>
  )
}

export default ProcurementForm
