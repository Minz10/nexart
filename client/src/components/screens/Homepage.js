import React from 'react'
import { Link } from "react-router-dom";

const Homepage = ()=>{
    return (
        <div className="home">

            <div>
                <Link to="/CreatePost">
                     <button className="btn"> CreatePost</button>
                </Link>
            </div>

            <div className="card home-card">
                <h2>Beard Nation</h2>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8d2FsbHBhcGVyfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="card-content">
                    <i className="material-icons">favorite_border</i>
                    <h4>title</h4>
                    <p>caption</p>
                    <input type="text" placeholder="add a comment" />
                </div>
            </div>
        </div>
    )
}

export default Homepage