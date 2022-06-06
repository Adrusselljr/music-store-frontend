import React from 'react'
import HomePage from './pages/HomePage'
import CustomThemeProvider from './componenets/CustomThemeProvider'

function App() {
    return (
        <div>
            <CustomThemeProvider>
                <HomePage />
            </CustomThemeProvider>
        </div>
    )
}

export default App