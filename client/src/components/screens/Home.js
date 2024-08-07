import React from "react";
import { Link } from "react-router-dom";

 
const Home = () => {
  return (
    <>
      <div className="row">
        <div className="content">
          <h1>
            Welcome to <br /> NeXart
          </h1>
          <p>A platform designed for your talent to be recognised.</p>
               
          <Link to="/Signup">
            <button className="btn"> Get Started </button>
          </Link>
        </div>
        <div className="Image">
          <img className="img-1" src={require("../1.jpg")} />
        </div>
      </div>
    </>
  );
};

export default Home;
