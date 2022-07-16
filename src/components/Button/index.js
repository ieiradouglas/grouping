import React from 'react';


import "./index.css";

function Button({text, route}) {
    return(
        <button to={route}>{text}</button>
    )
}

export default Button;