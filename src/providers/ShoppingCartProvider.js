import React, { createContext, useState, useContext } from "react";

const ShoppingCartContext = createContext();

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }) => {
  const [aldiPriceTotal, setAldiPriceTotal] = useState(0);
  const [aldiShoppingList, setAldiShoppingList] = useState([]);

  const [ahPriceTotal, setAhPriceTotal] = useState(0);
  const [ahShoppingList, setAhShoppingList] = useState([]);

  const [plusPriceTotal, setPlusPriceTotal] = useState(0);
  const [plusShoppingList, setPlusShoppingList] = useState([]);

  const [jumboPriceTotal, setJumboPriceTotal] = useState(0);
  const [jumboShoppingList, setJumboShoppingList] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        //Aldi
        aldiPriceTotal,
        setAldiPriceTotal,
        aldiShoppingList,
        setAldiShoppingList,
        //Albert Heijn
        ahPriceTotal,
        setAhPriceTotal,
        ahShoppingList,
        setAhShoppingList,
        //Plus
        plusPriceTotal,
        setPlusPriceTotal,
        plusShoppingList,
        setPlusShoppingList,
        //Jumbo
        jumboPriceTotal,
        setJumboPriceTotal,
        jumboShoppingList,
        setJumboShoppingList,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
