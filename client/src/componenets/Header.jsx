import React from 'react';
import { useShoppingCart } from '../context/shoppingCartContext';
import { useUserData } from '../context/userDataContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Badge, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Header = () => {
    const { shoppingCart } = useShoppingCart()
    const { user } = useUserData()

    const itemQuantity = shoppingCart.reduce((acc, cartItem) => {
        return acc + cartItem.quantity
    }, 0)

    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                My Music Store
            </Typography>
            <Box mr={ 2 }>
                {
                    user === undefined
                    ? <Button variant="contained" color="primary">Sign In</Button>
                    : <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>Hi, { user.firstName }</Typography>
                }
            </Box>
            <IconButton
                size="large"
                aria-label="Go to shopping cart"
                color="inherit"
                >
                <Badge badgeContent={ itemQuantity } color="primary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header