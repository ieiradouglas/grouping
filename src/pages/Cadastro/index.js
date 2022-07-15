import React from 'react';
import "./index.css"
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
                    <Input type="password" placeholder="Digite sua senha"/>
                    <Button text="Cadastrar"/>
                </form>
            </div>
        </main>
    )
}

export default Cadastro;