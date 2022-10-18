import { createReducer } from "@reduxjs/toolkit"
import { login } from "../Action/action-login"

const initialState = {
    user : null
}

export const loginReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(login.fulfilled, (status, action) => {
            return{
                user : action.payload
            }
        })
})