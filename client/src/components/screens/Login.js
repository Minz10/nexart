import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className="main_div">
      <div className="box">
        <h1>Login</h1>
        <form>
          <div className="inputBox">
            <input
              type="text"
              name="username"
              autoComplete="off"
              required
            ></input>
            <label>username</label>
          </div>

          <div className="inputBox">
            <input
              type="password"
              name="password"
              autoComplete="off"
              required
            ></input>
            <label>password</label>
          </div>

          <input type="submit" value="Login"></input>

          <div>
            <Link to="/" className="login-link">
              Forgot Password?
            </Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

/*<div className="mycard">
      <div className="card auth-card">
        <h2 className="brand-logo-form">NeXart</h2>

        <div className="input-box">
          <input type="text" placeholder="email" />
        </div>

        <div className="input-box">
          <input type="password" placeholder="password" />
        </div>

        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Login
        </button>

        <div className="form-link">
          <Link>Forgot Password?</Link>
        </div>

        <div >
          <Link to="/Signup"> Create an account</Link>
        </div>
      </div>
    </div>
    */