const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");


export const getCategories = createAsyncThunk(
    'getCategories/fetchJsonServer',
    async (state, thunk) => {
        const response = await axios.get('http://localhost:3000/categories')
        const categories = response.data
        const newCategorie = categories
        
        
        return newCategorie
    }
)