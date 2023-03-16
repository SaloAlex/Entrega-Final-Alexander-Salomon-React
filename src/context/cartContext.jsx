import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider(props) {

    const [cart, setCart] = useState([]);

    function addToCart(product, count) {
        let itemAlreadyInCart = cart.findIndex((item) => item.id === product.id);
        let newCart = [...cart];

        if (itemAlreadyInCart !==  -1) {
            newCart[itemAlreadyInCart].count += count;
            setCart(newCart);
        } else {
            product.count = count;
            newCart.push(product);
            setCart(newCart);
        }
    }

    function itemsInCart() {
        let total = 0;
        cart.forEach((item) => total = total + item.count);
        return total;
    }
    
    function totalPriceInCart() {
        let totalPrice = 0;
        cart.forEach((item) => (totalPrice = totalPrice + (item.price*item.count)))
        return totalPrice;
    }

    function removeItem(idRemove) {
        setCart(cart.filter((item) => item.id !== idRemove));
    }

    function clear() {
        setCart([]);
    }
    
    return (
        <cartContext.Provider value={{ cart, addToCart, itemsInCart, removeItem, totalPriceInCart, clear }}>
            {props.children}
        </cartContext.Provider>
    )
}