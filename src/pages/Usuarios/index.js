import React from "react"
import "./index.css"

import Header from "../../components/Header"
import PerfilBlock from "../../components/PerfilBlock"

import {getUsuarios} from "../../index"

export default function Usuarios(){
  
  const usuarios = getUsuarios()

  return(
    <>
      <Header className="header"/>
      <div className="container-list">
        <div className="list">
          {
            usuarios.map((user)=>
              <PerfilBlock
                img={user.img}
                name={user.nome}
                profession={user.profession}
              />
            )
          }
          

        </div>
      </div>
    </>
  )
}