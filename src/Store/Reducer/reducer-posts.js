import { createReducer } from "@reduxjs/toolkit";
import { addPost, getPosts } from "../Action/action-posts";

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
        .addCase(addPost.fulfilled, (status, action)  => {
            return console.log(status, action);
        })
        .addCase(addPost.rejected, (status, action) => {
            return console.log(status, action);
        })
        .addCase(addPost.pending, (status, action) => {
            return console.log(status, action);
        })
})