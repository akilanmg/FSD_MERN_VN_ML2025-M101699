import React, { useState } from 'react';

function Task4() {

  const [username, setUsername] = useState('');

  
  const handleChange = (event) => {
    
    const newValue = event.target.value;

    setUsername(newValue);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2> Input Field</h2>
      
      <label htmlFor="username-input" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
        Username:
      </label>
      <input
        id="username-input"
        type="text"
        placeholder="Start typing your username..."
        value={username} 
        onChange={handleChange} 
        style={{ padding: '10px', fontSize: '16px', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      
      

      <div className="output-display">
        
        {username ? (
          <p style={{ fontSize: '1.2em', color: '#007bff' }}>
             <strong>{username}</strong>
          </p>
        ) : (
          <p style={{ color: '#888' }}>
            
          </p>
        )}
      </div>
    </div>
  );
}

export default Task4;