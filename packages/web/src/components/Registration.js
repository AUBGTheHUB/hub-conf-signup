

import React from "react";
import Motherboard from "./Motherboard";
import RegForm from "./RegForm";
import "../style.css";

const EventDesc = () => {
    return (
<div>
    <div className="Event">     
        <div className="EventDesc">
            <Motherboard/>
        </div>
    </div> 
    <div>
        <RegForm/>
    </div>
</div>   
    )
}

export default EventDesc;