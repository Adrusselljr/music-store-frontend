import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logInUserRequest } from '../dataFetching';
import { Box, Button } from '@mui/material';

const LOG_OUT = 'LOG_OUT'

const UserPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const handleSignOut = () => {
        logInUserRequest()
        .then(response => {
            console.log('user sign out response: ', response)
            dispatch({ type: LOG_OUT })
        })
    }

    return (
        <Box m={ 4 }>
            <Box>
                <h1>Hi, { user.firstName }</h1>
                <Button variant='contained' onClick={ handleSignOut }>Sign Out</Button>
            </Box>
        </Box>
    )
}

export default UserPage