import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase";

import "./Login.css";

function Login() {
  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");
  const history = useHistory();
  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // user successfuly logedin
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <div>
        <Link to="/">
          <img
            className="login-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt=""
          />
        </Link>
      </div>
      <div className="login-container">
        <h1>Sign In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            value={email}
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" onClick={login} className="login-signin-button">
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button className="login-register-button" onClick={register}>
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
