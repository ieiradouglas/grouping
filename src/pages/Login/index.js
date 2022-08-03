import React from 'react';

import {Link, useNavigate} from 'react-router-dom';
import "./index.css"
import logo from '../../assets/img/LogoVertical.svg'

import Input from "../../components/Input"
import Button from "../../components/Button"
import Usuarios from "../Usuarios"


function Login() {

    let navigate = useNavigate();
    
    
    function handleClick(){
        let usuario = document.getElementsByClassName("usuario")[0]
        let senha = document.getElementsByClassName("senha")[0]

        if(usuario.value == "admin" && senha.value == "admin"){
            navigate("/inicio")
        }
        else{
            navigate("/cadastro")
        }
    }
    

    return(
        <main>
            <div className="container">
                <Link className="btCadastro" to="/cadastro"><Button text="Cadastro"/></Link>
                <div className="form-background">
                    <img src={logo}/>
                    <form onSubmit={(event)=>event.preventDefault()}>
                        <Input className="usuario" type="text" placeholder="Digite seu E-mail"/>
                        <Input className="senha" type="password" placeholder="Digite sua senha"/>
                        <div className="form-button">
                            <Button onClick={()=>handleClick()} text="Login"/>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Login;