import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import { createOrder } from '../../services/firestore';
import { useNavigate } from 'react-router-dom';
import './cartview.css'
import CartForm from '../CartForm/CartForm';

function CartView() {
  const { cart, removeItem, clear, totalPriceInCart } = useContext(cartContext);
  let navigate = useNavigate();

  async function checkout(evt, data) {
    const order = {
      buyer: data,
      items: cart,
      total: totalPriceInCart(),
      date: new Date(),
    }
    const orderId = await createOrder(order);
    navigate(`/thankyou/${orderId}`);
    clear();
  }

  if (cart.length === 0) {
    return (
      <div>
        <h1 className='alertCart'>Carrito vacio. Vuelve a Home.</h1>
      </div>
    )
  }

  return (
    <>
      <h1 className='tituloCart'>Tus libros agregados al carrito</h1>
      <div className='cartContainer'>
        {cart.map((item) =>
          <div className='cartItem' key={item.id}>
            <img style={{ width: "120px" }} src={item.url} alt={item.name} />
            <div className='cartInfo'>
              <h3>{item.category} {item.name}</h3>
              <span>Cantidad: {item.count}</span>
              <span>Precio por unidad: ${item.price}</span>
              <span>Subtotal: ${item.price * item.count}</span>
              <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
            </div>
          </div>
        )}
      </div>
      <div className='form'>
        <CartForm clear={clear} onSubmit={checkout} />
        <h3 style={{ padding: "1rem 0" }}>Total: ${totalPriceInCart()}</h3>
      </div>
    </>
  )
}

export default CartView;