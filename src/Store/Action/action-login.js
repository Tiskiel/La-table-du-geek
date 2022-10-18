import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const login = createAsyncThunk("login/fetchUser",
    async (payload, thunk) => {
        const data = await axios.get("http://localhost:3000/users?username=" + payload.username)
        console.log(data);
        if(data.data.length === 0) return null
        const user = data.data[0]

        if (user.password !== payload.password) return null

        return user
    }
)

export const logout = createAction("logout/disconnected", (state, action) => {

    return state = ""

})