import React, { useState } from "react";
import { FaShoppingCart, FaWallet } from "react-icons/fa";

function MenuChip({ title, background, border, total, items }) {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      style={{
        alignItems: "center",
        position: "relative", // Add this to position the expanded content absolutely with respect to this div
      }}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
    >
      <div
        style={{
          backgroundColor: background,
          border: "2px solid " + border,
          borderRadius: 20,
          width: 80,
          height: 30,
          textAlign: "center",
          padding: 5,
          marginTop: "5px",
          marginBottom: 0,
          cursor: "pointer",
          overflow: "visible",
        }}
      >
        <p style={{ color: "#fff", fontWeight: 900, fontSize: 18, margin: 5 }}>
          {title}
        </p>
        {items.length > 0 ? (
          <div
            style={{
              display: "flex",
              backgroundColor: "#e8382c",
              border: "1px solid black",
              height: 30,
              width: 30,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              overflow: "auto",
              position: "relative",
              left: 70,
              bottom: 15,
              color: "white",
              zIndex: 1001,
            }}
          >
            <FaShoppingCart style={{ color: "white" }} /> {items.length}
          </div>
        ) : (
          ""
        )}
      </div>

      {hovering ? (
        <div
          style={{
            position: "absolute", // Position the expanded content absolutely
            top: "100%", // Position it right below the chip
            left: 0, // Align it with the left edge of the chip
            backgroundColor: "white",
            border: "2px solid #aaa",
            borderRadius: 5,
            width: 250, // Fixed width
            zIndex: 10, // Ensure it's above other content
          }}
        >
          <ul>
            {items.map((item) => {
              return (
                <li>
                  <div style={{ display: "flex" }}>
                    <img
                      src={item.imgUrl}
                      style={{ height: "80px" }}
                      alt={item.title}
                    />
                    <div>
                      <p style={{ margin: 3 }}>
                        {item.brandName === "" ? "Aldi" : item.brandName}
                      </p>
                      <p style={{ margin: 3 }}>{item.title}</p>
                      <p style={{ margin: 3 }}>
                        {item.count} x {item.price}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <p style={{ margin: 5 }}>
            <FaWallet style={{ marginRight: 10 }} />€{total.toFixed(2)}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default MenuChip;
