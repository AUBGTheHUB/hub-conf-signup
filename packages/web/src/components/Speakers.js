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
      <img src="/packages/web/src/speakers/boris_angelov.png"></img>
      <img src="/packages/web/src/speakers/dimitar_mitkov.png"></img>
      <img src="/packages/web/src/speakers/georgi_kostadinov.png"></img>
      <img src="/packages/web/src/speakers/georgi_mutafchiev.png"></img>
      <img src="/packages/web/src/speakers/ina_toncheva.png"></img>
      <img src="/packages/web/src/speakers/ivan_angelinin.png"></img>
      <img src="/packages/web/src/speakers/nikolay_babanov.png"></img>
      <img src="/packages/web/src/speakers/paulina_chotrova.png"></img>
        </div>
    </div>
    </div>
    )
}

export default Speakers;