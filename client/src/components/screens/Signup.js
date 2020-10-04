import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="main_div">
      <div className="box">
        <h1>Create your account</h1>
        <form>
          <div className="inputBox">
            <input
              type="text"
              name="email"
              autoComplete="off"
              required
            ></input>
            <label>email</label>
          </div>

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

          <input type="submit" value="Create"></input>
 
        </form>
      </div>
    </div>
  );
};

export default Signup;
