import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase";
import { Link } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Check if the username and password are "admin"
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
    } else {
      alert("Access denied! Incorrect username or password.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  // const signUp = (e) => {
  //   e.preventDefault();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       console.log(userCredential);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const href = {
    color: "white",
    fontWeight: "500",
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
          <form>
            <div class="title">
              <h2>Welcome to Shoply</h2>
            </div>
            <div>
              {isLoggedIn ? (
                <div>
                  <h1>Welcome, Admin!</h1>
                  <div class="create">
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                  <div class="create">
                    <button onClick={handleLogout}>
                      <Link to={"/shop"} style={href}>
                        Shop{" "}
                      </Link>
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h1>admin:admin</h1>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <div class="create">
                    <button type="submit" onClick={handleLogin}>
                      Login{" "}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
