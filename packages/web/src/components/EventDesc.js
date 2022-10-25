import React from "react";
import Motherboard from "./Motherboard";

import "../style.css";

const EventDesc = () => {
    return (
     
    <div className="Event">     
        <div className="EventDesc">
            <Motherboard/>
            <h1 className="heading" id="Hubconf">Welcome to HubConf</h1>     
        </div>
        <div className="content">
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum <br></br>
            <br></br> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            
        </div>
    </div>  
    )
}

export default EventDesc;