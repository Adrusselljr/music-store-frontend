import React, { useState} from 'react';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import CustomThemeProvider from './componenets/CustomThemeProvider';
import ShoppingCartProvidor from './context/shoppingCartContext';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

const App = () => {
    const [page, setPage] = useState('homePage')

    return (
        <CustomThemeProvider>
            <ShoppingCartProvidor>
                <Box display="flex" justifyContent="space-around" alignItems="center">
                    <Button variant='outlined' onClick={ () => setPage('homePage') }>Home Page</Button>
                    <Button variant='outlined' onClick={ () => setPage('cartPage') }>Cart Page</Button>
                </Box>
                {
                    page === 'homePage'
                    ? <HomePage />
                    : <CartPage />
                }
            </ShoppingCartProvidor>
        </CustomThemeProvider>
    )
}

export default App