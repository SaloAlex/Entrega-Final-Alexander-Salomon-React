import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ButtonDetail from '../Button/ButtonDetail'
import { useContext, useState } from 'react'
import { cartContext } from '../../context/cartContext'
import '../ItemListContainer/Item/item.css'
import './itemdetail.css'
import { Link } from 'react-router-dom'

function ItemDetail({ product }) {
    const [isInCart, setIsInCart] = useState(false);
    const { addToCart } = useContext(cartContext);

    function onAddToCart(count) {
        setIsInCart(true);
        addToCart(product, count);
    }

    return (
        <div className='detailCard'>
            <div className='card'>
                <div className='cardImg'>
                    <img src={product.url} alt={product.name} />
                    <img src={product.url} alt={product.name} />
                    <img src={product.url} alt={product.name} />
                </div>
                <div className='cardInfoDetail'>
                    <h3>{product.category} {product.name}</h3>
                    <p>{product.info}</p>
                    <p className='strong'>${product.price}</p>
                </div>
                {isInCart ?
                    (<div>
                        <Link style={{ marginRight: "1rem" }} to="/cart">
                            <ButtonDetail>Ir al Carrito</ButtonDetail>
                        </Link>
                        <Link to="/">
                            <ButtonDetail>Seguir comprando</ButtonDetail>
                        </Link>
                    </div>)
                    :
                    (<ItemCount onAddToCart={onAddToCart} stock={product.stock} />)}
            </div>
        </div>
    )
}

export default ItemDetail;