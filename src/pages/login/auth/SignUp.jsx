import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase";
import { Link } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const href = {
    color: "white",
    fontWeight: "1000",
    textDecoration: "none",
  };

  return (
    <section>
      <div class="content">
        <div class="left">
          <img
            src="https://img.icons8.com/glyph-neue/64/FFFFFF/shopping-cart-loaded.png"
            alt="icon"
          />
          <h1>Shoply</h1>
        </div>

        <div class="right">
          <form onSubmit={signUp}>
            <div class="title">
              <h2>Welcome to Shoply</h2>
            </div>
            <div class="form">
              <div class="inputbox">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your Name" required />
              </div>
              <div class="inputbox">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email ID"
                  required
                />
              </div>
              <div class="inputbox">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  required
                />
              </div>
              <div class="create">
                <button type="submit">
                  <Link to={"/shop"} style={href}>
                    Login{" "}
                  </Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
