import React, { useContext } from 'react';
import { shoppingCartContext } from "../../App";
import { Box, Button } from '@mui/material';
import Layout from '../Layout';

const CartPage = () => {
    const { shoppingCart, removeFromCart } = useContext(shoppingCartContext)

    return (
        <Layout shoppingCart={ shoppingCart }>
            <Box width={ 1 } display="flex" flexDirection="column" alignItems="center">
                {shoppingCart.map(cartItem =>
                <Box p={ 3 }>
                <Box>
                    { cartItem.title } - Qty: { cartItem.quantity } - ${ cartItem.price / 100 } total: ${ cartItem.total/100 }
                </Box>        
                    <Box>
                        <Button variant='outlined' onClick={ () => removeFromCart(cartItem.id) } >Remove From cart</Button>
                    </Box>
                </Box>
                )}
            </Box>
        </Layout>
    )
}

export default CartPage