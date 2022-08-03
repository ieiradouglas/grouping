import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './index.css';

import Login from ".//pages/Login"
import Cadastro from ".//pages/Cadastro"
import Perfil from ".//pages/Perfil"
import Usuarios from ".//pages/Usuarios"

const notFound = () =>{
  return(
    <h1>Página não encontrada...</h1>
  )
}

export function getUsuarios(){
  
  let usuarios = [
    {usuario:"admin", senha:"teste123", nome:"Douglas Vieira da Silva",idade:24, img:"https://avatars.githubusercontent.com/u/44785888?v=4",profession:"Técnico em informática"},
    
  ]
  return usuarios;
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/inicio" element={<Usuarios/>}/>
      <Route path="/perfil" element={<Perfil/>}/>
      <Route path="*" element={notFound()}/>
    </Routes>
  </Router>
);
