import React from "react";
import "../style.css";
import { useMediaQuery } from 'react-responsive'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


const NavigationBar = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 1200px)' })

    if (isMobile) {
        return (
            <div className="mobile-nav">
                <Navbar collapseOnSelect expand="lg" variant="dark" className="mobile-nav-collapse">
                    <Navbar.Brand className="mobile-nav-logo">HubConf</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="mobile-nav-collapsed">
                        <Nav.Link href="#Speakers">Speakers</Nav.Link>
                        <Nav.Link href="#Registration">Register</Nav.Link>
                        <Nav.Link href="#Representatives">Representatives</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
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

export default NavigationBar;