import React from 'react'
import { useState } from 'react'
import './itemcount.css'

function ItemCount({ stock, onAddToCart }) {

    let [count, setCount] = useState(1);

    function countSuma() {
        (count < stock) && setCount(count + 1);
    }

    function countResta() {
        (count > 1) && setCount(count - 1);
    }

    return (
        <div className='btns'>
            <div className='btnsCount'>
                <button onClick={countResta}>-</button>
                <span>{count}</span>
                <button onClick={countSuma}>+</button>
            </div>
            <button onClick={() => onAddToCart(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;