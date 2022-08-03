import React from "react";

import "./index.css";


export default function PerfilBlock({img, profession, onClick}) {
  return(
    <figure onClick={onClick} className="perfil-figure">
      <img src={img}/>
      <figcaption className="perfil-caption">{profession}</figcaption>
    </figure>
  )
}