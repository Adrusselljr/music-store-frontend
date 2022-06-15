import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import CustomThemeProvider from './componenets/CustomThemeProvider';
import SignInPage from './pages/SignInPage';
import store from './reduxStore';


const App = () => {
    return (
        <ReduxProvider store={ store }>
            <BrowserRouter>
                <CustomThemeProvider>
                    <Routes>
                        <Route path="/" element={ <HomePage /> } />
                        <Route path="/sign-in" element={ <SignInPage /> } />
                        <Route path="/cart" element={ <CartPage /> } />
                    </Routes>
                </CustomThemeProvider>
            </BrowserRouter>
        </ReduxProvider>
    )
}

export default App