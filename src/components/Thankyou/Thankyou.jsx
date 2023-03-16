import React from 'react'
import './ty.css'
import { useParams, Link } from 'react-router-dom';
import ButtonDetail from '../Button/ButtonDetail';

function Thankyou() {
  const { idOrder } = useParams();

  return (
    <div className='checkSuccess'>
      <div className="wrapper"> <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
      </svg>
      <h3>Gracias por la compra.</h3>
      <br></br>
      <p style={{fontSize: "20px"}}>Tu ID de compra es: <strong>{idOrder}</strong></p>
      <Link to='/'><ButtonDetail>Volver al Inicio</ButtonDetail></Link>
      </div>
    </div>
  )
}

export default Thankyou;