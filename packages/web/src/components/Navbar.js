import React from "react";
import "../style.css";

const Navbar = () => {
    return (
    <div className="nav-bar">
        <div className="nav-div">
            <div className="logo">
                <img  src = "whitelogo.png" alt="Hub logo"/>
            </div>
            <div className="nav-tags">
                <a href="#anch_hubconf">HubConf</a>
            </div>
            <div className="nav-tags">
                <a href="#anch_reg">Registration</a>
            </div>
            <div className="nav-tags">
                <a href="#Partners">Companies</a>
            </div>
            <div className="nav-tags">
                <a href="#anch_speakers">Speakers</a>
            </div>
        </div> 
        {/* this is the end of the navdiv */}            
    </div> 

    )
}

export default Navbar;