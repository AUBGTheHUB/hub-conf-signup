import React from "react";
import "../style.css";
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 1200px)' })

    if (isMobile) {
        return (
            <div>
                <h1>HELLO</h1>
            </div>
        )
    }

    else {
        return (
            <div className="nav-bar">
                <div className="nav-div top">
                    <div className="logo">
                        <img src="whitelogo.png" alt="Hub logo" />
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


}

export default Navbar;