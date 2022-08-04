import React from 'react';
import {Link} from "react-router-dom"

import logo from "../../assets/img/LogoHorizontal.svg";
import Button from "../Button"
import "./index.css";



function Header(){
    return(
        <header>
            <div className="header-background">
                <div className="logo">
                    <img src={logo}/>
                   
                </div>
                
                <div className="buttons">
                        <Link to="/inicio">
                            <Button
                                className="btAjuda" 
                                text="Início"
                            />
                        </Link>
                        <Link to="/perfil">
                            <Button
                                className="btAjuda" 
                                text="Perfil"
                            />
                        </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;