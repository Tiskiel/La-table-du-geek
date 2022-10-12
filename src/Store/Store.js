import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./Reducer/reducer-navbar";


export const store = configureStore({
    reducer : {
        allCategories : categoriesReducer,
    },
    devTools : process.env.NODE_ENV !== "production"
})