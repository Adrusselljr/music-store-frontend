import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import CustomThemeProvider from './componenets/CustomThemeProvider';
import SignInPage from './pages/SignInPage';

const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const EMPTY_CART = 'EMPTY_CART'

const shoppingCartReducer = (shoppingCart = [], action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const { product } = action.payload
            const productFound = shoppingCart.find(cartItem => cartItem.id === product.id)
        
            if(productFound) {
            const newShoppingCart = shoppingCart.map(cartItem => {
                const newQuantity = cartItem.quantity + 1
                if(cartItem.id === productFound.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1, total: newQuantity * cartItem.price }
                }
                return cartItem
            })
            return newShoppingCart
            }
            const newShoppingCart = [...shoppingCart, {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                total: product.price,
                quantity: 1
            }]
            return newShoppingCart
        }

        case REMOVE_FROM_CART: {
            const { productId } = action.payload
            const newShoppingCart = shoppingCart.filter(cartItem => cartItem.id !== productId)
            return newShoppingCart
            }

        case EMPTY_CART:
            return []
    
        default:
            return shoppingCart
    }
}

const userReducer = (state = null, action) => {
    switch (action.type) {
        case LOG_IN:
            return action.payload.user

        case LOG_OUT:
            return null
    
        default:
            return state
    }
}

const store = configureStore({
    reducer: {
        user: userReducer,
        shoppingCart: shoppingCartReducer
    }
})

const App = () => {
    return (
        <ReduxProvider store={ store }>
            <BrowserRouter>
                <CustomThemeProvider>
                    <Routes>
                        <Route path="/" element={ <HomePage /> } />
                        <Route path="/sign-in" element={ <SignInPage /> } />
                        <Route path="/cart" element={ <CartPage /> } />
                    </Routes>
                </CustomThemeProvider>
            </BrowserRouter>
        </ReduxProvider>
    )
}

export default App