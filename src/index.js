import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './index.css';

import Login from ".//pages/Login"
import Cadastro from ".//pages/Cadastro"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
    </Routes>
  </Router>
);
