import React from "react";

const offices = [
  { Name: "DBS", Rent: 50000, Address: "Chennai" },
  { Name: "Regus", Rent: 75000, Address: "Bangalore" },
  { Name: "WeWork", Rent: 55000, Address: "Mumbai" },
  { Name: "SmartWorks", Rent: 65000, Address: "Hyderabad" },
];

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Page heading */}
      <h1>Office Space, at Affordable Range</h1>

      {/* Image from public folder */}
      <img 
        src="/office.jpg" 
        alt="Office Space" 
        width="400" 
        height="250" 
        style={{ marginBottom: "20px", borderRadius: "10px" }} 
      />

      {/* Office details */}
      {offices.map((office, index) => {
        const rentStyle = {
          color: office.Rent <= 60000 ? "red" : "green",
          fontWeight: "bold",
        };

        return (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h2>Office Space</h2>
            <div>Name: {office.Name}</div>
            <div style={rentStyle}>Rent: Rs. {office.Rent}</div>
            <div>Address: {office.Address}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
