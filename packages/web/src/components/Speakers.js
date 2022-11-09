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
          <img src="boris_angelov.png"></img>
          <img src="dimitar_mitkov.png"></img>
          <img src="georgi_kostadinov.png"></img>
          <img src="georgi_mutafchiev.png"></img>
          <img src="ina_toncheva.png"></img>
          <img src="ivan_angelinin.png"></img>
          <img src="nikolay_babanov.png"></img>
          <img src="paulina_chotrova.png"></img>
        </div>
      </div>
    </div>
  )
}

export default Speakers;