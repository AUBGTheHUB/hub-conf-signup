import React from "react";
import "../style.css";
import Flippedmb from "./Flippedmb";

const Speakers = () => {
    return (
   
    <div className="Speaker">     
    <div className="SpeakerDesc"> 
    <h1 className="heading" id="Speakers">Speakers</h1>
        <Flippedmb/>   
        
        <div className="gallery">
      <img src="https://media.discordapp.net/attachments/756143084189778043/1039950769203466271/boris_angelov_name.png?width=695&height=707"></img>
      <img src="https://media.discordapp.net/attachments/756143084189778043/1039950883561164901/dimitar_mitkov_.png?width=695&height=707"></img>
      <img src="https://media.discordapp.net/attachments/756143084189778043/1039951031821422622/georgi_kostadinov_.png?width=693&height=706"></img>
      <img src="https://media.discordapp.net/attachments/756143084189778043/1039951003279171685/georgi_mutafchiev_.png?width=695&height=707"></img>
      <img src="https://media.discordapp.net/attachments/756143084189778043/1039951155263967262/ina_toncheva_.png?width=695&height=707"></img>
      <img src="https://media.discordapp.net/attachments/756143084189778043/1039951169923063888/ivan_angelinin_.png?width=696&height=707"></img>
      <img src="https://media.discordapp.net/attachments/756143084189778043/1039951206568693780/nikolay_babanov_.png?width=694&height=707"></img>
      <img src="https://media.discordapp.net/attachments/756143084189778043/1039951218006573087/paulina_chotrova_.png?width=696&height=707"></img>
        </div>
    </div>
    </div>
    )
}

export default Speakers;