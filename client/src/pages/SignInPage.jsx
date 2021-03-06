import React, { useState } from 'react';
import { useUser } from '../reduxStore/userState';
import Layout from '../componenets/Layout';
import UserPage from './UserPage';
import { logInUserRequest } from '../dataFetching';
import { Box, Button, TextField } from '@mui/material';

function SignInPage() {
    const { user, logIn } = useUser()
    const [signInForm, setSignInForm] = useState({ email: '', password: '' })

    const onSubmit = () => {
        logInUserRequest()
        .then(response => {
            console.log('user sign in response: ', response)
            logIn(response.data)
        })
    }

    return (
        <Layout>
            {
                !user
                ? (
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
                )
                : ( <UserPage /> )
            }
        </Layout>
    )
}

export default SignInPage