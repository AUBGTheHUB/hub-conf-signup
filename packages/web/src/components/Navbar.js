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
                <a href="#Hubconf">HubConf</a>
            </div>
            <div className="nav-tags">
                <a href="#Speakers">Speakers</a>
            </div>
            <div className="nav-tags">
                <a href="#Registration">Registration</a>
            </div>
            <div className="nav-tags">
                <a href="#Representatives">Representatives</a>
            </div>
        </div> 
        {/* this is the end of the navdiv */}            
    </div> 

    )
}

export default Navbar;