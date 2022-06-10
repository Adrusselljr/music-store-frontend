import React, { createContext, useContext, useState } from 'react';

export const userDataContext = createContext()
export const useUserData = () => useContext(userDataContext)

const UserDataProvider = props => {
    const { children } = props
    const [user, setUser] = useState()

    const addUser = user => setUser(user)
    const removeUser = () => setUser(undefined)

    return (
        <userDataContext.Provider value={{ user, addUser, removeUser }}>
            { children }
        </userDataContext.Provider>
    )
}

export default UserDataProvider