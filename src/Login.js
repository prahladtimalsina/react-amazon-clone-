import React from "react";
import "./Login.css";
import { Link, UseHistory } from "react-router-dom";

function Login() {
  const login = (event) => {
    event.preventDefault(); //this will stop the refresh;
    //do login  logic...
  };

  const register = (event) => {
    event.preventDefault(); //this will stop the refresh;
    //do register  logic...
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login_logo"
        />

        {/* <h1>sdfasdf</h1> */}
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <button onClick={login} type="submit" className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
