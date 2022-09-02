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
        
        <div className="perfil-usuario">
          <h3>Usuário:{usuarios[0].usuario}</h3>
        </div>
        </div>
        <textarea onBlur={()=>notifySuccess("Atualizado")} className="perfil-description" rows="15" placeholder="Digite aqui sua nova descrição."/>
      </div>
      <div className="info-container">
        <div className="infoBlock">
          <ul className="infoList">
            <li>Nome:{usuarios[0].nome}</li>
            <li>Sobrenome:{usuarios[0].sobrenome}</li>
            <li>E-mail:{usuarios[0].email}</li>
            <li>Profissão:{usuarios[0].profession}</li>
            <li>Celular:{usuarios[0].celular}</li>
          </ul>
        </div>
        <div className="infoBlock">
          <ul className="infoList">
            <li>Cep:{usuarios[0].cep}</li>
            <li>Rua:{usuarios[0].rua}</li>
            <li>Cidade:{usuarios[0].cidade}</li>
            <li>Estado:{usuarios[0].estado}</li>
          </ul>
        </div>
      </div>
      </div>
    </>
    
  )
}
