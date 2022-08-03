import React from 'react';
import "./index.css";

function Input({placeholder, type, id, className}) {
    return(
        <input className={className} type={type} placeholder={placeholder} id={id}/>
    )
}

export default Input;