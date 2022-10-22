import React from "react";
import "../style.css";
import Flippedmb from "./Flippedmb";

const Speakers = () => {
    return (
   
    <div className="Speaker">     
    <div className="SpeakerDesc"> 
        <Flippedmb/>   
        <h1 className="heading">Speakers</h1>
        <div class="gallery">
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"></img>
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/2.jpg"></img>
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/3.jpg"></img>
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/4.jpg"></img>
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/5.jpg"></img>
      <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/6.jpg"></img>
        </div>
    </div>
    </div>
    )
}

export default Speakers;