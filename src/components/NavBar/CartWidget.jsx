import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext'


function CartWidget() {
    const { cart, itemsInCart } = useContext(cartContext);

    if (cart.length === 0) {
        return (
            <Link to="/cart">🛒</Link>
        )
    }

    return (
        <Link to="/cart">🛒<span>{itemsInCart()}</span></Link>
    );
}

export default CartWidget;