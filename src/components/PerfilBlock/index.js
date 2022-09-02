import React from "react";

import "./index.css";


export default function PerfilBlock({img, name, profession, onClick}) {
  return(
    <figure onClick={onClick} className="perfilFigure">
      <img src={img}/>
      <div className="perfilInfo">
      <figcaption className="info name">{name}</figcaption>
      <h3 className="info profession">{profession}</h3>
      </div>
    </figure>
  )
}