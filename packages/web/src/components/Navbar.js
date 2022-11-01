import { useMediaQuery } from "react-responsive";
import React from "react";
import "../style.css";

const Navbar = () => {

    const isMobile = useMediaQuery({ maxWidth: 1200 })

    if(!isMobile) {
        return (
            <div className="nav-bar">
                <div className="nav-div top">
                    <div className="logo">
                        <img src="whitelogo.png" alt="Hub logo" />
                    </div>
                    <div className="nav-tags">
                        <p>HubConf</p>
                    </div>
                    <div className="nav-tags" hidden>
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
}

export default Navbar;