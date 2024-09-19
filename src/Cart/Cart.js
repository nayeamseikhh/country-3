import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum, country) => sum + country.population, 0);
    return (
        <div className='cartStyle'>
            <h2>Country Added : {cart.length}</h2>
            <p>TotalPopulation : {totalPopulation}</p>
        </div>
    );
};

export default Cart;