import React, { useContext, useState, useHistory } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, getTotalCartQuantity } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const totalQuantity = getTotalCartQuantity();

  // const navigate = useNavigate();

  // const history = useHistory();
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   address: '',
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can perform any validation or data processing here
  //   // Then navigate to the next page with form data
  //   history.push('/invoice', { formData });
  // };

  return (
    <div className="d-flex m-5">
      <div className="userDetails">
        <h1 className="mb-5">Enter Shipping Details</h1>
        <form className="userDetailsForm">
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <input type="text" id="form6Example1" class="form-control" />
                <label class="form-label" for="form6Example1">
                  First name
                </label>
              </div>
            </div>
          </div>

          {/* value={formData.name}  onChange={handleInputChange} */}

          {/* <div class="form-outline mb-4">
            <input type="text" id="form6Example3" class="form-control" />
            <label class="form-label" for="form6Example3">
              Company name
            </label>
          </div> */}

          <div class="form-outline mb-4">
            <input type="email" id="form6Example5" class="form-control" />
            <label class="form-label" for="form6Example5">
              Email
            </label>
          </div>

          <div class="form-outline mb-4">
            <input type="number" id="form6Example6" class="form-control" />
            <label class="form-label" for="form6Example6">
              Phone
            </label>
          </div>

          <div class="form-outline mb-4">
            <input type="text" id="form6Example4" class="form-control" />
            <label class="form-label" for="form6Example4">
              Address
            </label>
          </div>
          {/* 
          <div class="form-outline mb-4">
            <div class="col-3">
              <input type="text" class="form-control mb-2" placeholder="City" />
              <input type="text" class="form-control" placeholder="State" />
              <input type="text" class="form-control" placeholder="Zip" />
            </div>
          </div> */}

          {/* <div class="form-outline mb-4">
            <textarea
              class="form-control"
              id="form6Example7"
              rows="4"
            ></textarea>
            <label class="form-label" for="form6Example7">
              Additional information
            </label>
          </div> */}

          <button type="submit" class="btn btn-primary btn-block ">
            Place order
          </button>
        </form>
      </div>
      <div className="vr d-flex justify-content-center"></div>
      <div className="cart">
        <div className="cartTitle">
          <h1>Your Cart Items</h1>
        </div>
        <div className="cart">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <h4>
              {" "}
              Total Quantity : {totalQuantity} | SubTotal : ₹ {totalAmount}
            </h4>
            {/* <button onClick={() => navigate("/shop")}>
              {" "}
              Continue Shopping{" "}
            </button>
            <button onClick={() => navigate("/checkout")}> Checkout </button> */}
          </div>
        ) : (
          <h1 className="cartEmpty"> Your Shopping Cart is Empty</h1>
        )}
      </div>
    </div>
  );
};
