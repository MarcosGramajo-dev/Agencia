import React from "react";
import foto from './config/foto1.jpg'


export default function Slide(){

  return(
    <div className="slideConteiner">
      <img className="fotoSlide1" src={foto} alt="#"/>

      <div>
        <img src={foto} alt="#"/>
        <img src={foto} alt="#"/>
        <img src={foto} alt="#"/>
        <img src={foto} alt="#"/>
      </div>
    </div>
  )
}