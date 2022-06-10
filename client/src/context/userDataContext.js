import React, { createContext, useContext, useReducer } from 'react';

export const userDataContext = createContext()
export const useUserData = () => useContext(userDataContext)

const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

const userReducer = (state, action) => {
    switch (action.type) {
        case LOG_IN:
            return action.payload.user

        case LOG_OUT:
            return undefined
    
        default:
            return state
    }
}

const UserDataProvider = props => {
    const { children } = props
    const [user, dispatch] = useReducer(userReducer)

    const addUser = user => {
        dispatch({type: LOG_IN, payload: {
            user: user
        }})
    }
    const removeUser = () => {
        dispatch({type: LOG_OUT})
    }

    return (
        <userDataContext.Provider value={{ user, addUser, removeUser }}>
            { children }
        </userDataContext.Provider>
    )
}

export default UserDataProvider