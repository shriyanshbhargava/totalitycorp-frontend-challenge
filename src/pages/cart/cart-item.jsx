import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage, category, actualPrice } =
    props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <table className="cartTable">
      <tr>
        <td width={40}>{id}</td>
        <td width={70}>
          <img src={productImage} width="50" height="50" alt={productImage} />
        </td>
        <td>{productName}</td>
        <td>₹ {actualPrice}</td>

        <td>₹ {price}</td>
        <td>{category}</td>
        <td width={150}>
          <div className="countHandler">
            <button onClick={() => removeFromCart(id)}> - </button>
            <input
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button onClick={() => addToCart(id)}> + </button>
          </div>
        </td>
      </tr>
    </table>
  );
};
