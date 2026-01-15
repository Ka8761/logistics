import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Track = () => {
  return (
    <div>
    <Navbar/>

    <div>
    
    <div className='d-flex flex-column justify-content-center align-items-center' style={{width:'100%', height:'70vh'}}>
     <h1>Track Your Shipment</h1>
     <Form className='d-flex align-items-center gap-3' >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='mb-1 fs-6'>Tracking Id</Form.Label>
        <Form.Control type="text" placeholder="e.g:SHP126" />
      </Form.Group>

      <Button type="submit" style={{backgroundColor:'#ff6600ff', border:'none'}} className='mt-3' >
        Track Shipment
      </Button>
    </Form>
    </div>
    </div>

    <Footer/>
    </div>
  )
}

export default Track