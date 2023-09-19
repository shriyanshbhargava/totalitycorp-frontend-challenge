import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage, category, rating } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          {" "}
          ${price} - {category}{" "}
        </p>
        <p>{rating}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
