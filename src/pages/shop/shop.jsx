import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shoply</h1>
      </div>

      <div className="row"></div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product}  />
        ))}
      </div>
    </div>
  );
};
