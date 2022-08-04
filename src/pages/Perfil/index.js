import React from 'react'
import "./index.css"
import Header from "../../components/Header"

import toast, {Toaster} from "react-hot-toast";

import {getUsuarios} from "../../index"
import Input from '../../components/Input';

function notifySuccess(message){
    toast.success(`${message}`)
}



export default function Perfil() {
  const usuarios = getUsuarios();

  return(
    <>
      <Header/>
      <Toaster
        toastOptions={{
          position:"top-right",
          style: {
            border: '1px solid black',
            padding: '16px',
            }
          }}
      />
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
        <textarea onBlur={()=>notifySuccess("Sucesso!")} className="perfil-description" rows="15" />
      </div>
      </div>
    </>
    
  )
}
