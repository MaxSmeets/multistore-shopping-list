import React from "react";
import "../index.css";

function SearchBar() {
  return (
    <div style={{ marginRight: "auto", marginLeft: "auto" }}>
      <select
        style={{ height: 56, width: 50, borderRadius: "14px 0px 0px 14px" }}
      >
        <option value='aldi'>aldi</option>
        <option value='plus'>plus</option>
        <option value='jumbo'>jumbo</option>
        <option value='ah'>AH</option>
      </select>
      <input
        style={{ height: 50, width: "80%", borderRadius: 0 }}
        placeholder='Search item'
      />
    </div>
  );
}

export default SearchBar;
