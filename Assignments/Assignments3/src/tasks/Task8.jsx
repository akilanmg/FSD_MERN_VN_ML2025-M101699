import React, { useState } from 'react';


const products = [
  { id: 1, name: 'Laptop', category: 'Electronics' },
  { id: 2, name: 'T-Shirt', category: 'Clothes' },
  { id: 3, name: 'Smartphone', category: 'Electronics' },
  { id: 4, name: 'Jeans', category: 'Clothes' },
  { id: 5, name: 'Headphones', category: 'Electronics' },
  { id: 6, name: 'Jacket', category: 'Clothes' },
  { id: 7, name: 'Mouse', category: 'Electronics' },
  { id: 8, name: 'Socks', category: 'Clothes' },
];

function Task8() {
 
  const [activeFilter, setActiveFilter] = useState('All');

  
  const filteredProducts = products.filter(product => {
    
    if (activeFilter === 'All') {
      return true;
    }
    
    return product.category === activeFilter;
  });

  
  const renderFilterButton = (filterName) => (
    <button
      key={filterName}
      onClick={() => setActiveFilter(filterName)}

    >
      {filterName}
    </button>
  );

  return (
    <div>
      <h2> Product Filtering </h2>
      <div >
        {renderFilterButton('All')}
        {renderFilterButton('Electronics')}
        {renderFilterButton('Clothes')}
      </div>

      <hr />

      <h3>Items Displayed ({filteredProducts.length})</h3>
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredProducts.map(product => (
          <li 
            key={product.id} 
            style={{ 
              padding: '8px', 
              marginBottom: '5px', 
              borderBottom: '1px dotted #503e3eff',
              backgroundColor: product.category === 'Electronics' ? '#47545bff' : '#7f6972ff'
            }}
          >
            <strong>{product.name}</strong> (Category: {product.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task8;