import React, { useContext } from 'react';
import { shoppingCartContext } from '../context/shoppingCartContext';
import CartItem from '../componenets/CartItem';
import { Box } from '@mui/material';
import Layout from '../componenets/Layout';

const CartPage = () => {
    const { shoppingCart } = useContext(shoppingCartContext)

    return (
        <Layout shoppingCart={ shoppingCart }>
            <Box width={ 1 } display="flex" flexDirection="column" alignItems="center">
                {shoppingCart.map(cartItem =>
                    <Box key={ cartItem.id } p={ 3 } width="100%" maxWidth="500px">
                        <CartItem cartItem={ cartItem } />
                    </Box>
                )}
            </Box>
        </Layout>
    )
}

export default CartPage