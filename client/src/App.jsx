import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import CustomThemeProvider from './componenets/CustomThemeProvider';
import ShoppingCartProvidor from './context/shoppingCartContext';
import UserDataProvider from './context/userDataContext';
import SignInPage from './pages/SignInPage';

const App = () => {
    return (
        <BrowserRouter>
            <CustomThemeProvider>
                <UserDataProvider>
                    <ShoppingCartProvidor>
                        <Routes>
                            <Route path="/" element={ <HomePage /> } />
                            <Route path="/sign-in" element={ <SignInPage /> } />
                            <Route path="/cart" element={ <CartPage /> } />
                        </Routes>
                    </ShoppingCartProvidor>
                </UserDataProvider>
            </CustomThemeProvider>
        </BrowserRouter>
    )
}

export default App