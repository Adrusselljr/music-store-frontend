import React from 'react'
import { useShoppingCart } from '../context/shoppingCartContext';
import { Card, Box, CardMedia, Typography, IconButton } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CartItem = props => {
    const { cartItem } = props
    const { removeFromCart } = useShoppingCart()

    return (
        <Card>
            <Box display="flex">
                <Box>
                    <CardMedia component="img" sx={ { width: 50, height: 50, p: 1 } } image={ cartItem.image }/>
                </Box>
                <Box px={ 2 } display="flex" flexDirection="column" flexGrow={ 1 } justifyContent="center">
                    <Box>
                        <Typography fontWeight="bold">
                            { cartItem.title }
                        </Typography>
                    </Box>
                    <Box>
                        <Typography fontWeight="bold">
                            ${ cartItem.price / 100 }
                        </Typography>
                    </Box>
                </Box>
                <Box px={ 2 } display="flex" flexDirection="column" justifyContent="center">
                    <Typography fontWeight="bold">
                            x{ cartItem.quantity }
                    </Typography>
                </Box>
                <Box px={ 2 } display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <IconButton onClick={ () => removeFromCart(cartItem.id) }>
                        <DeleteForeverIcon/>
                    </IconButton>
                </Box>
            </Box>
        </Card>
    )
}

export default CartItem