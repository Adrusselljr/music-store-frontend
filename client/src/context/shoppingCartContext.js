import React, { useState, createContext } from 'react';

export const shoppingCartContext = createContext()

const ShoppingCartProvidor = props => {
    const [shoppingCart, setShoppingCart] = useState([])
    const { children } = props

    const addToCart = product => {
        const productFound = shoppingCart.find(cartItem => cartItem.id === product.id)
        
        if(productFound){
        const newShoppingCart = shoppingCart.map(cartItem => {
            const newQuantity = cartItem.quantity + 1
            if(cartItem.id === productFound.id){
            return {...cartItem, quantity: cartItem.quantity + 1, total: newQuantity * cartItem.price}
            }
            return cartItem
        })
        return setShoppingCart(newShoppingCart)
        }
        const newShoppingCart = [...shoppingCart, {
            id: product.id,
            title:  product.title,
            price:  product.price,
            quantity: 1,
            image:  product.image,
            total: product.price
        }]
        setShoppingCart(newShoppingCart)
    }

    const removeFromCart = productId => {
        const newShoppingCart = shoppingCart.filter(cartItem => cartItem.id !== productId)
        setShoppingCart(newShoppingCart)
    }
    return (
        <shoppingCartContext.Provider value={{ shoppingCart, addToCart, removeFromCart }}>
            { children }
        </shoppingCartContext.Provider>
    )
}

export default ShoppingCartProvidor