import { createReducer } from "@reduxjs/toolkit";
import { addUser } from "../Action/action-users";


const intitialState = {
    users : []
}

export const usersreducer = createReducer(intitialState, (builder) => {
    builder
        .addCase(addUser.fulfilled, (state, action) => {
            return console.log(state, action)
        } )
        .addCase(addUser.pending, (state, action) => {
            return console.log(state, action)
        })
        .addCase(addUser.rejected, (state, action) => {
            return console.log(state, action)
        })
})