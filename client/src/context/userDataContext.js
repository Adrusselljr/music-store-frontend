import React, { createContext, useContext, useState } from 'react';

export const userDataContext = createContext()
export const useUserData = () => useContext(userDataContext)

const UserDataProvider = props => {
    const { children } = props
    const [user, setUser] = useState([])

    const addUser = user => setUser(user)
    const removeUserData = () => setUser([])

    return (
        <userDataContext.Provider value={{ user, addUser, removeUserData }}>
            { children }
        </userDataContext.Provider>
    )
}

export default UserDataProvider