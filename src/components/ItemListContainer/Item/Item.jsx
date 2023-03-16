import React from 'react'
import ButtonDetail from '../../Button/ButtonDetail';
import { Link } from 'react-router-dom'
import './item.css'

function Item({ product }) {
  const urlItem = `/item/${product.id}`;
  
  return (
    <div className='card'>
      <div className='cardImg'>
        <img src={product.url} alt={product.name} />
      </div>
      <div className='cardInfo'>
        <h3>{product.name}</h3>
        <p className='strong'>${product.price}</p>
      </div>
      <Link to={urlItem}>
        <ButtonDetail>Detalles del producto</ButtonDetail>
      </Link>
    </div>
  )
}

export default Item;