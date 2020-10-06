import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <Link to="/" className="brand ">
          NeXart
        </Link>
        <nav>
          <ul id="menuList">
            <li>
              <Link to="/" className="navbar-links">
                {" "}
                About{" "}
              </Link>
            </li>
            <li>
              <Link to="./Login" className="navbar-links">
                <button className="btn-login"> Login </button>
              </Link>
            </li>
          </ul>
        </nav>
        <img src={require("./menu-icon.png")} className="menu-icon" />
      </div>
    </div>
  );
};

export default Navbar;

// brand-logo left-align
// My icons collection