import React from 'react'
import { useUserData } from '../context/userDataContext'
import { logInUserRequest } from '../dataFetching';
import { Box, Button } from '@mui/material';

const UserPage = () => {
    const { user, removeUserData } = useUserData()

    const handleSignOut = () => {
        logInUserRequest()
        .then(response => {
            console.log('user sign out response: ', response)
            removeUserData()
        })
    }

    return (
        <Box m={4}>
            <Box>
                <h1>Hi, { user.firstName }</h1>
                <Button variant='contained' onClick={ handleSignOut }>Sign Out</Button>
            </Box>
        </Box>
    )
}

export default UserPage