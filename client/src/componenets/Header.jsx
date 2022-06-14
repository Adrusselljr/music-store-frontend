import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box } from "@mui/system";
import { AppBar, Badge, Button, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../index.css';

const Header = () => {
    const user = useSelector((state) => state.user);
    const shoppingCart = useSelector((state) => state.shoppingCart);

    const itemQuantity = shoppingCart.reduce((acc, cartItem) => {
        return acc + cartItem.quantity
    }, 0)

    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Link to="/">
                        <Typography variant="h6" component="div">
                            My Music Store
                        </Typography>
                    </Link>
                </Box>
                <Box mr={2}>
                    <Link to="/sign-in">
                        {
                            !user
                            ? <Button variant="contained" color="primary">Sign In</Button>
                            : <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>Hi, { user.firstName }</Typography>
                            }
                    </Link>
                </Box>
                <IconButton
                    size="large"
                    aria-label="Go to shopping cart"
                    color="inherit"
                >
                    <Box mr={ 2 }>
                        <Link to="/cart">
                            <Badge badgeContent={ itemQuantity } color="primary">
                                <ShoppingCartIcon />
                            </Badge>
                        </Link>
                    </Box>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header