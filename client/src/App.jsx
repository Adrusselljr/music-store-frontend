import React, { useState, createContext } from 'react';
import CartPage from './componenets/pages/CartPage';
import HomePage from './componenets/pages/HomePage';
import { Button } from '@mui/material';
import CustomThemeProvider from './componenets/CustomThemeProvider';

export const shoppingCartContext = createContext()

const App = () => {
    const [page, setPage] = useState('homePage')
    const [shoppingCart, setShoppingCart] = useState([])

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
        <CustomThemeProvider>
            <shoppingCartContext.Provider value={ { shoppingCart, addToCart, removeFromCart } }>
                <Button variant='outlined' onClick={ () => setPage('homePage') }>Home Page</Button>
                <Button variant='outlined' onClick={ () => setPage('cartPage') }>Cart Page</Button>
                {
                    page === 'homePage'
                    ? <HomePage addToCart={ addToCart } shoppingCart={ shoppingCart } />
                    : <CartPage shoppingCart={ shoppingCart } addToCart={ addToCart } removeFromCart={ removeFromCart }/>
                }
            </shoppingCartContext.Provider>
        </CustomThemeProvider>
    )
}

export default App