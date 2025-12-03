import React, { useState } from "react";

export default function FruitList() {
  const [fruits, setFruits] = useState(["Apple", "Mango", "Banana"]);
  const [input, setInput] = useState("");

  // Add Fruit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    setFruits([...fruits, input.trim()]);
    setInput("");
  };

  // Delete Fruit
  const handleDelete = (indexToRemove) => {
    setFruits(fruits.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Fruit List</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter a fruit"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            padding: "8px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 12px",
            borderRadius: "5px",
            border: "none",
            background: "green",
            color: "white",
            cursor: "pointer",
          }}
        >
          Add Fruit
        </button>
      </form>

      {/* Fruit List */}
      <ul>
        {fruits.map((fruit, index) => (
          <li
            key={index}
            style={{
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {fruit}
            <button
              onClick={() => handleDelete(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "4px 8px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

