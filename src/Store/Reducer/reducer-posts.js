import { createReducer } from "@reduxjs/toolkit";
import { getPosts } from "../Action/action-posts";

const initialState = {
    posts : []
}

export const postsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getPosts.fulfilled, (status, action) => {

            return{
                posts : action.payload
            }
        })
        .addCase(getPosts.rejected, (status, action) => {

            return{
                posts : []
            }
        })
        .addCase(getPosts.pending, (status, action) => {

            return{
                posts : []
            }
        })
        
})