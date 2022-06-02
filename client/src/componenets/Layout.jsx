import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = props => {
    const { children } = props

    return (
        <div>
        
            <header><h1>This is the header</h1></header>

            <div>
                {children}
            </div>

        </div>
    )
}

export default Layout