import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { Box } from '@mui/system'

const Header = () => {
    return (
        <div>

            <AppBar position="static" color='secondary'>
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My Music Store
                </Typography>
                <Box mr={ 2 }>
                    <Button variant="contained" color="primary">Sign In</Button>
                </Box>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                >
                <ShoppingCartIcon />
                </IconButton>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Header