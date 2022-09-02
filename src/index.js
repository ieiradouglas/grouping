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
    {usuario:"ieiradouglas", 
    nome:"Douglas",
    sobrenome:"Vieira da Silva",
    email:"email@teste.com.br", 
    profession:"Técnico em informática",
    celular:"(22) 99999-9999",
    cep:"28888-88",
    rua:"Rua das Flores",
    cidade:"Rio de Janeiro",
    estado:"Rio de Janeiro",
    idade:24, 
    img:"https://avatars.githubusercontent.com/u/44785888?v=4"}
    
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
