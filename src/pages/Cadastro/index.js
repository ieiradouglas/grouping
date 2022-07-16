import React from 'react';

import { Link } from 'react-router-dom'
import "./index.css";
import logo from '../../assets/img/LogoVertical.svg'

import Input from "../../components/Input"
import Button from "../../components/Button"

function Cadastro() {
    return(
        <main>
            <div className="form-background">
                <img src={logo}/>
                <form onSubmit={(event)=>event.preventDefault()}>
                    <Input type="text" placeholder="Primeiro Nome"/>
                    <Input type="e-mail" placeholder="Seu melhor E-mail"/>
                    <Input type="password" placeholder="Cadastre uma senha"/>
                    <div className="form-button">
                        <Button text="Cadastrar"/>
                        <Link to="/"><Button text="Voltar"/></Link>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Cadastro;