import React from 'react';
import { useShoppingCart } from '../context/shoppingCartContext';
import CartItem from '../componenets/CartItem';
import Layout from '../componenets/Layout';
import { Box, Button } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay'
import HomeIcon from '@mui/icons-material/Home'

const CartPage = () => {
    const { shoppingCart, emptyCart } = useShoppingCart()

    return (
        <Layout shoppingCart={ shoppingCart }>
            <Box width={ 1 } display="flex" flexDirection="column" alignItems="center">
                {shoppingCart.map(cartItem =>
                    <Box key={ cartItem.id } p={ 3 } width="100%" maxWidth="500px">
                        <CartItem cartItem={ cartItem } />
                    </Box>
                )}
                <Box>
                    <Box mb={ 3 }>
                        <Button fullWidth variant='contained'>Checkout</Button>
                    </Box>
                    <Box mb={ 3 }>
                        <Button fullWidth variant='contained' startIcon={<ReplayIcon />} onClick={ emptyCart }>Empty Cart</Button>
                    </Box>
                    <Box mb={ 3 }>
                        <Button fullWidth variant='contained' startIcon={<HomeIcon />}>Home</Button>
                    </Box>
                </Box>
            </Box>
        </Layout>
    )
}

export default CartPage