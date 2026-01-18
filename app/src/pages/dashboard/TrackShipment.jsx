import React from 'react';

const TrackShipment = () => {
  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', minHeight: '50vh' }}>
      <h3 style={{ color: '#333', marginBottom: '20px' }}>Track Your Shipment</h3>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Enter your tracking number below to check status
      </p>
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <input 
          type="text" 
          placeholder="Enter Tracking Number" 
          style={{ 
            width: '70%', 
            padding: '12px 16px', 
            border: '2px solid #ddd', 
            borderRadius: '8px 0 0 8px',
            fontSize: '16px'
          }}
        />
        <button 
          style={{ 
            padding: '12px 24px', 
            background: 'orange', 
            color: 'white', 
            border: 'none',
            borderRadius: '0 8px 8px 0',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Track
        </button>
      </div>
    </div>
  );
};

export default TrackShipment;
