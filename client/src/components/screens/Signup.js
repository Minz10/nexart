import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2 className="brand-logo">NeXart</h2>
        <input type="text" placeholder="username" />

        <input type="text" placeholder="email" />

        <input type="text" placeholder="password" />

        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Signup;
