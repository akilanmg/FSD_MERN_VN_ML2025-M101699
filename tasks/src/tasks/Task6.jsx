import React from 'react';

const products = [
  { id: 101, name: 'Wireless Mouse', price: 25.99 },
  { id: 102, name: 'Mechanical Keyboard', price: 79.50 },
  { id: 103, name: 'Webcam 1080p', price: 45.00 },
  { id: 104, name: 'Monitor Stand', price: 19.99 },
];

function Task6() {
  return (
    <div>
      <h2> Product List Display</h2>
      
      
      <table style={{ borderCollapse: 'collapse', width: '60%', margin: '20px auto' }}>
        
        
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Product Name</th>
            <th style={tableHeaderStyle}>Price</th>
          </tr>
        </thead>
        
        
        <tbody>
          {products.map((product) => (
            
            <tr key={product.id} style={tableRowStyle}>
           
              <td style={tableCellStyle}>{product.id}</td>
              
             
              <td style={tableCellStyle}>{product.name}</td>
              
              
              <td style={tableCellStyle}>${product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <p>
        **Note:** The **`key={product.id}`** prop is crucial in React when using **`.map()`**. It helps React efficiently update and re-render elements.
      </p>
    </div>
  );
}




export default Task6;