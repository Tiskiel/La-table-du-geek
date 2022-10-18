import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk('assUser/fetch', 
    async (newUser, thunk) => {
    const user = axios.put('http://localhost:3000/users', newUser)

})