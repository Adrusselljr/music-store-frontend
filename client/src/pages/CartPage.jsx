import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../componenets/CartItem';
import Layout from '../componenets/Layout';
import { Box, Button } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay'
import HomeIcon from '@mui/icons-material/Home'

const EMPTY_CART = 'EMPTY_CART'

const CartPage = () => {
    const dispatch = useDispatch()
    const shoppingCart = useSelector(state => state.shoppingCart)

    return (
        <Layout>
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
                        <Button fullWidth variant='contained' startIcon={<ReplayIcon />} onClick={() => dispatch({ type: EMPTY_CART }) }>Empty Cart</Button>
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