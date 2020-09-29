import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="container">
          <Link to="/" className="brand-logo black-text left">
            NeXart
          </Link>
          <ul className="right  black-text">
            <li>
              <Link className="black-text" to="badges.html">
                About
              </Link>
            </li>
            <li>
              <Link to="/Login" class="btn">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//brand-logo left-align