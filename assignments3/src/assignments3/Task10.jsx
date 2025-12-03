import React from "react";
import products from "../data.json"; // Importing local JSON file

export default function ProductList() {
  return (
    <div style={styles.container}>
      {products.map((item) => (
        <div key={item.id} style={styles.card}>
          <img src={item.image} alt={item.name} style={styles.image} />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}