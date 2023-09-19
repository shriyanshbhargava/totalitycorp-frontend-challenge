import React, { useState } from "react";
import { PRODUCTS } from "./products";

const Buttons = () => {
  const [PRODUCTS, setPRODUCTS] = useState(PRODUCTS);

  const menuItems = [...new Set(PRODUCTS.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = PRODUCTS.filter((newVal) => {
      return newVal.category === curcat;
    });
    setPRODUCTS(newItem);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        {menuItems.map((Val, id) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setPRODUCTS(PRODUCTS)}
        >
          All
        </button>
      </div>
    </>
  );
};

export default Buttons;
