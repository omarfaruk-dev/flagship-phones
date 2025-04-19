import React, { useEffect, useState } from 'react';
import { CartContext } from './Contexts';
import { getCart } from '../../utility/localStorage';

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        // check with local storage if data is available or not
        setCart(getCart())
    }, [])

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>

    );
};

export default CartProvider;