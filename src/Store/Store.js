import { configureStore } from "@reduxjs/toolkit";
import { getCategories } from "./Action/action-categories";
import { categoriesReducer } from "./Reducer/reducer-categories";


export const store = configureStore({
    reducer : {
        allCategories : categoriesReducer,
    },
    devTools : process.env.NODE_ENV !== "production"
})

store.dispatch(getCategories())