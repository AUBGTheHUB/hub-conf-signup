

import React from "react";
import Motherboard from "./Motherboard";
import RegForm from "./RegForm";
import "../style.css";

const EventDesc = () => {
    return (   

<div className="Reg">     
        <div className="RegDesc">
            <Motherboard/>
            <h1 className="heading">Registration</h1>     
        </div>
        <div className="content">
        <div>
        <RegForm/>
    </div> 
        </div>
    </div> 
    )
}

export default EventDesc;