import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormShipment = () => {
  return (
    <>
      <div style={{
        backgroundColor: 'rgba(0, 128, 0, 0.2)', // green with opacity
        borderRadius: '20px',
        padding: '2rem',
        maxWidth: '500px',
        margin: '2rem auto',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ textAlign: 'center', color: '#004d00' }}>Track Shipment!</h2>
        <p style={{ textAlign: 'center' }}>Let's track your shipment!</p>

        <Form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{
            border: '8px solid green',
            borderRadius: '10px',
            padding: '0.5rem'
          }}>
            <Form.Control
              type="text"
              placeholder="Your Tracking ID"
              style={{
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
                backgroundColor: 'white'
              }}
            />
          </div>

          <Button
            type='submit'
            style={{
              backgroundColor: 'orange',
              border: 'none',
              padding: '0.75rem',
              fontWeight: 'bold',
              borderRadius: '10px'
            }}
          >
            Track Shipment
          </Button>
        </Form>
      </div>
    </>
  )
}

export default FormShipment
