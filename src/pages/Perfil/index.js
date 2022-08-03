import React from 'react'
import "./index.css"
import Header from "../../components/Header"

import {getUsuarios} from "../../index"
import Input from '../../components/Input';


const usuarios = getUsuarios();
export default function Perfil() {
  
  return(
    <>
      <Header/>
      <div className="perfil-main">
      <div className="perfil-container">
        <div className="perfil-block">
          <img src={usuarios[0].img}/>
        
        <div className="perfil-input">
          <h3>Nome:</h3> <input  value={usuarios[0].nome}/>
          <h3>Idade:</h3> <input value={usuarios[0].idade}/>
          <h3>Profissão:</h3> <input value={usuarios[0].profession}/>
        </div>
        </div>
        <textarea className="perfil-description" rows="15" />
      </div>
      </div>
    </>
    
  )
}
