import React from "react";
import Motherboard from "./Motherboard";

import "../style.css";

const EventDesc = () => {
    return (
     
    <div className="Event">     
        <div className="EventDesc">
            <Motherboard/>
        <div className="content">
            <h1 className="heading">Welcome to HubConf</h1>
        </div> 
    </div>
</div>
    )
}

export default EventDesc;