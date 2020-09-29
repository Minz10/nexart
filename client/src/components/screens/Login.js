import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className="mycard">
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

        <div>
          <Link>Forgot Password?</Link>
        </div>

        <div>
          <Link to="/Signup"> Create an account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
