import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        logIn: (state, action) => action.payload.user,
        logOut: () => null
    }
})

export const { logIn, logOut } = userSlice.actions

export const useUser = () => {
    const dispatch = useDispatch()

    return {
        user: useSelector(state => state.user),
        logIn: userDate => dispatch(logIn({ user: userDate })),
        logOut: () => dispatch(logOut())
    }
}

const userReducer = userSlice.reducer

export default userReducer