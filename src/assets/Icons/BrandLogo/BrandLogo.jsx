import React from 'react';
import { Link } from 'react-router-dom';
import '../Icons.css'

const Cart = () => {
  return (
    <Link to='/'>
      <img className='brandlogo' src={require('../../Images/logo192.png')} alt="brandlogo" />
    </Link>
  )
}

export default Cart;
