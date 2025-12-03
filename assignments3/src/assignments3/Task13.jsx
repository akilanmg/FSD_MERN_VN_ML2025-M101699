import React, { useState } from "react";

export default function ProfileForm() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update only the field being edited
    setProfile({
      ...profile,
      [name]: value
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Edit Profile</h2>

      {/* Name */}
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        style={inputStyle}
      />

      {/* Email */}
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={profile.email}
        onChange={handleChange}
        style={inputStyle}
      />

      {/* Phone */}
      <label>Phone:</label>
      <input
        type="text"
        name="phone"
        value={profile.phone}
        onChange={handleChange}
        style={inputStyle}
      />

      <div style={{ marginTop: "20px" }}>
        <h3>Preview</h3>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
      </div>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "8px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};
