import React from 'react';
import Button from 'react-bootstrap/Button';

const StartShip = () => {
  return (
    <div className='container py-5'>
      <div
        className='text-center text-light p-5 rounded-4'
        style={{
          backgroundColor: '#0b0c2a', 
          borderRadius: '20px',
          minHeight: '300px',
        }}
      >
        <h1 className='mb-3'>Looking for a leading shipping company for your business?</h1>
        <p className='mb-4'>Join over 3000+ customers already growing with CargoExtra</p>
        <Button
          style={{
            backgroundColor: 'orange',
            border: 'none',
            fontWeight: 'bold',
          }}
        >
          Start Shipping Now
        </Button>
      </div>
    </div>
  );
};

export default StartShip;
