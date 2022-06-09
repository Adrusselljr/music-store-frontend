import React, { useState } from 'react';
import Layout from '../componenets/Layout';
import { logInUserRequest } from '../dataFetching';
import { Box, Button, TextField } from '@mui/material';

function SignInPage() {
    const [signInForm, setSignInForm] = useState({ email: '', password: '' })

    const onSubmit = () => {
        logInUserRequest()
        .then(response => {
            console.log('user sign in response: ', response)
            // Put the resulting user data in react context over the entire application
            // That it can be accessed from any component in the component tree.
        })
    }

    const handleSignOut = () => {
        // lougout the user
        logInUserRequest()
        .then(response => {
            console.log('user sign out response: ', response)
            // Remove the user data from the user context when a user logs out
        })
    }

    return (
        <Layout>
            <Box p={ 4 }>
                <h1>Sign in</h1>
                <Box mb={ 3 }>
                    <TextField
                        id="email"
                        label="Email"
                        variant="standard"
                        value={ signInForm.email }
                        onChange={ e => setSignInForm({ ...signInForm, email: e.target.value }) }
                    />
                </Box>
                <Box mb={ 3 }>
                    <TextField
                        id="password"
                        type="password"
                        label="Password"
                        variant="standard"
                        value={ signInForm.password }
                        onChange={ e => setSignInForm({ ...signInForm, password: e.target.value }) }
                    />
                </Box>
                <Button variant="contained" onClick={ onSubmit }>Sign in</Button>
            </Box>
        </Layout>
    )
}

export default SignInPage