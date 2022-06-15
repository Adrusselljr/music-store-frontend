import { useDispatch, useSelector } from 'react-redux';

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const EMPTY_CART = 'EMPTY_CART'

export const addToCartCreator = product => ({
    type: ADD_TO_CART,
    payload: { product }
})

export const removeFromCartCreator = productId => ({
    type: REMOVE_FROM_CART,
    payload: { productId }
})

export const emptyCartCreator = () => ({
    type: EMPTY_CART
})

export const useShoppingCart = () => {
    const dispatch = useDispatch()

    return {
        shoppingCart: useSelector(state => state.shoppingCart),
        addtoCart: product => dispatch(addToCartCreator(product)),
        removeFromCart: productId => dispatch(removeFromCartCreator(productId)),
        emptyCart: () => dispatch(emptyCartCreator())
    }
}

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

export default shoppingCartReducer