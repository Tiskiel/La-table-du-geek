import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
    'getPosts/FetchJsonServer',
    async (getState, thunk) => {
        const response = await axios.get('http://localhost:3000/posts')
        const posts = response.data
        return posts
    }
)

export const addPost = createAsyncThunk(
    'addPost/fetchJsonServer',
    async (addCategorie, thunk) => {
        const add = await axios.post('http://localhost:3000/posts', addCategorie)
        thunk.dispatch(getPosts())
    }
)
export const deletePost = createAsyncThunk(
    'deletePost/fetchJsonServer',
    async (postId, thunk) => {
        console.log(postId);
        const kill = await axios.delete('http://localhost:3000/posts/' + postId)
        console.log(kill)
        thunk.dispatch(getPosts())
    }
)

export const updatePost = createAsyncThunk(
    'updatePost/fetchJsonServer',
    async (stateId, thunk) => {
        const update = await axios.put('http://localhost:3000/posts', stateId)
        thunk.dispatch(getPosts())
    }
)
