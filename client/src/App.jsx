import React, { useState} from 'react';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import CustomThemeProvider from './componenets/CustomThemeProvider';
import ShoppingCartProvidor from './context/shoppingCartContext';
import UserDataProvider from './context/userDataContext';
import SignInPage from './pages/SignInPage';
import { Box, Button } from '@mui/material';

const App = () => {
    const [page, setPage] = useState('homePage')

    const getPage = () => {
        switch (page) {
            case 'cartPage':
                return <CartPage />
            case 'signInPage':
                return <SignInPage />
            default:
                return <HomePage />
        }
    }

    return (
        <CustomThemeProvider>
            <UserDataProvider>
                <ShoppingCartProvidor>
                    <Box m={1} display='flex' justifyContent='space-around'>
                        <Button variant='contained' type="button" onClick={ () => setPage('homePage') }>Home Page</Button>
                        <Button variant='contained' type="button" onClick={ () => setPage('cartPage') }>Cart Page</Button>
                        <Button variant='contained' type="button" onClick={ () => setPage('signInPage') }>Sign In Page</Button>
                    </Box>
                    {getPage()}
                </ShoppingCartProvidor>
            </UserDataProvider>
        </CustomThemeProvider>
    )
}

export default App