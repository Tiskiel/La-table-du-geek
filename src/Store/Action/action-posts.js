import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
    'getPosts/FetchJsonServer',
    async (state, thunk) => {
        const response = await axios.get('http://localhost:3000/posts')
        const posts = response.data
        return posts
    }
)