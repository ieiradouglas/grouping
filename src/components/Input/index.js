import React from 'react';
import "./index.css";

function Input({placeholder, type, id}) {
    return(
        <input type={type} placeholder={placeholder} id={id}/>
    )
}

export default Input;