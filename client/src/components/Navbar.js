import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="container">
          <Link to="/" className="brand-logo white-text left">
            NeXart
          </Link>
          <ul className="right white-text">
            <li>
              <Link className="white-text" to="badges.html">
                ABOUT
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