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
            <p>HubConf 2022 gives you the opportunity to learn about developments in technology and business that look like they are out of this world. 
            </p>            
        </div>
        <div className="content">
            <p>Register for the event and get the chance to listen and ask questions to some of the pioneers of our society. Companies like Progress, Chaos and Uber will also join us to offer attendees exclusive insight into their workflows. 
                </p>            
        </div>
        <div className="content">
            <p>We will be awaiting you on November 12th at the American University in Bulgaria in the BAC lobby at 12:00 PM.</p>            
        </div>
    </div>  
    )
}

export default EventDesc;