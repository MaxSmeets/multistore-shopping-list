import React from "react";
import { useShoppingCart } from "../providers/ShoppingCartProvider";
import MenuChip from "./MenuChip";

function TopBar() {
  const {
    aldiPriceTotal,
    aldiShoppingList,
    plusPriceTotal,
    plusShoppingList,
    jumboPriceTotal,
    jumboShoppingList,
    ahPriceTotal,
    ahShoppingList,
  } = useShoppingCart();
  return (
    <div
      style={{
        margin: 0,
        padding: "10px",
        width: "100vw",
        height: 70,
        backgroundColor: "transparent",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100vw",
        }}
      >
        <MenuChip
          title='ALDI'
          background='#00b4dc'
          border='#001e78'
          total={aldiPriceTotal}
          items={aldiShoppingList}
        />
        <MenuChip
          title='PLUS'
          background='#90b00d'
          border='#00563b'
          total={plusPriceTotal}
          items={plusShoppingList}
        />
        <MenuChip
          title='JUMBO'
          background='#fdc513'
          border='#ca9d0f'
          total={jumboPriceTotal}
          items={jumboShoppingList}
        />
        <MenuChip
          title='APPIE'
          background='#0098d5'
          border='#0073a2'
          total={ahPriceTotal}
          items={ahShoppingList}
        />
      </div>
    </div>
  );
}

export default TopBar;
