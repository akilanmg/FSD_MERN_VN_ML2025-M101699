import React, { useState } from 'react';

function Task5() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    
    e.preventDefault();

    setSubmittedData(formData);

   
  };

  return (
    <div>
      <h2> Submission Form</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

       
        <div >
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

       
        <button type="submit" >
          Submit Data
        </button>
      </form>

      

      {submittedData && (
        <div>
          <h3>Submitted Values</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
        </div>
      )}
    </div>
  );
}


export default Task5;