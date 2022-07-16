import React from 'react';

import {Link} from 'react-router-dom';
import "./index.css"
import logo from '../../assets/img/LogoVertical.svg'

import Input from "../../components/Input"
import Button from "../../components/Button"

function Login() {
    return(
        <main>
            <div className="container">
                <Link className="btCadastro" to="/cadastro"><Button text="Cadastro"/></Link>
                <div className="form-background">
                    <img src={logo}/>
                    <form onSubmit={(event)=>event.preventDefault()}>
                        <Input type="text" placeholder="Digite seu E-mail"/>
                        <Input type="password" placeholder="Digite sua senha"/>
                        <div className="form-button">
                            <Link to="/"><Button text="Login"/></Link>
                            
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Login;