import React, { useState } from "react";
import './cartform.css'

export default function CartForm(props) {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    function onInputChange(evt) {
        let nameInput = evt.target.name;
        let value = evt.target.value;

        let newData = { ...data };
        newData[nameInput] = value;
        setData(newData);
    }

    function onSubmit(evt) {
        evt.preventDefault();
    }

    return (
        <>
            <h4 style={{ margin: "1rem" }}>Complete con sus datos antes de finalizar:</h4>
            <form className="formContainer" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Nombre Completo</label>
                    <input
                        required
                        value={data.name}
                        name="name"
                        type="text"
                        onChange={onInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        required
                        value={data.email}
                        name="email"
                        type="email"
                        onChange={onInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Teléfono</label>
                    <input
                        required
                        value={data.phone}
                        name="phone"
                        type="number"
                        onChange={onInputChange}
                    />
                </div>
                <div className="btnsCart">
                    <button onClick={props.clear}>Vaciar Carrito</button>
                    <button onClick={(evt) => props.onSubmit(evt, data)}
                        disabled={data.name === "" || data.phone === "" || data.email === ""}
                        type="submit"
                    >
                        Finalizar Compra
                    </button>
                </div>
            </form>
        </>
    );
}