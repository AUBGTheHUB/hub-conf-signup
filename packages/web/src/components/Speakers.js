import React from "react";
import "../style.css";
import Flippedmb from "./Flippedmb";

const Speakers = () => {
  return (

    <div className="Speaker">
      <div className="SpeakerDesc">
        <h1 className="heading" id="Speakers">Speakers</h1>
        <Flippedmb />

        <div className="gallery">
          <img src="Speakers/boris_angelov.png"></img>
          <img src="Speakers/dimitar_mitkov.png"></img>
          <img src="Speakers/georgi_kostadinov.png"></img>
          <img src="Speakers/georgi_mutafchiev.png"></img>
          <img src="Speakers/ina_toncheva.png"></img>
          <img src="Speakers/ivan_angelinin.png"></img>
          <img src="Speakers/nikolay_babanov.png"></img>
          <img src="Speakers/paulina_chotrova.png"></img>
        </div>
      </div>
    </div>
  )
}

export default Speakers;