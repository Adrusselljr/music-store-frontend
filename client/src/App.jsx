import React from 'react'
import Layout from './componenets/Layout'
import CustomThemeProvider from './componenets/CustomThemeProvider'

function App() {
    // return "hi"
    return (
        <div>

            <CustomThemeProvider>
                <Layout>
                    Home Page
                </Layout>
            </CustomThemeProvider>
        
        </div>
    )
}

export default App