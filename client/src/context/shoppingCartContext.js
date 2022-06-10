import React, { createContext, useContext, useReducer } from 'react';

export const shoppingCartContext = createContext()
export const useShoppingCart = () => useContext(shoppingCartContext)

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const EMPTY_CART = 'EMPTY_CART'

const shoppingCartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return action.payload.shoppingCart
        
        case REMOVE_FROM_CART:
            return action.payload.shoppingCart

        case EMPTY_CART:
            return []
    
        default:
            return state
    }
}

const ShoppingCartProvidor = props => {
    const { children } = props
    // const [shoppingCart, setShoppingCart] = useState([])
    const [shoppingCart, dispatch] = useReducer(shoppingCartReducer, [])

    const addToCart = product => {
        const productFound = shoppingCart.find(cartItem => cartItem.id === product.id)
        
        if(productFound) {
        const newShoppingCart = shoppingCart.map(cartItem => {
            const newQuantity = cartItem.quantity + 1
            if(cartItem.id === productFound.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1, total: newQuantity * cartItem.price }
            }
            return cartItem
        })
        return dispatch({ type: ADD_TO_CART, payload: {
            shoppingCart: newShoppingCart
        } })
        }
        const newShoppingCart = [...shoppingCart, {
            id: product.id,
            title:  product.title,
            price:  product.price,
            image:  product.image,
            total: product.price,
            quantity: 1
        }]
        dispatch({ type: ADD_TO_CART, payload: {
            shoppingCart: newShoppingCart
        } })
    }

    const removeFromCart = productId => {
        const newShoppingCart = shoppingCart.filter(cartItem => cartItem.id !== productId)
        dispatch({ type: REMOVE_FROM_CART, payload: {
            shoppingCart: newShoppingCart
        } })
    }

    const emptyCart = () => {
        dispatch({ type: EMPTY_CART })
    }

    return (
        <shoppingCartContext.Provider value={{ shoppingCart, addToCart, removeFromCart, emptyCart }}>
            { children }
        </shoppingCartContext.Provider>
    )
}

export default ShoppingCartProvidor