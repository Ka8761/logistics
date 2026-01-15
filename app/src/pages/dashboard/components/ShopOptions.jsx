import React from 'react'
import { Row, Col } from 'react-bootstrap'
const ShopOptions = () => {
  return (
    <Col className='bg-white p-5 h-100'>
        <Row className='mb-3'>
            <lefticon></lefticon>
            <p>Procurement Form</p>
        </Row>
        <Row>
            <lefticon></lefticon>
            <p>My Procurements</p>
        </Row>
    </Col>
  )
}

export default ShopOptions