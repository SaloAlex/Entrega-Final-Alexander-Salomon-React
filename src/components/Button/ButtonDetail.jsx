import React from 'react'
import './buttondetail.css'

function ButtonDetail(props) {
    return (
        <button>{props.children}</button>
    );
}

export default ButtonDetail;