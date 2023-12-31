import { Navbar } from "../../components/navbar";
import { Navbar2 } from "../../components/navbar2";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
          <Navbar />

      <div className="shopTitle">
        <h1>Shoply</h1>
      </div>

      <div className="row"></div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <Navbar2 />
    </div>
  );
};
