import React from 'react';

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
                <div>
                    <Button 
                        text="Ajuda"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;