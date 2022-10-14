import { configureStore } from "@reduxjs/toolkit";
import { getCategories } from "./Action/action-categories";
import { getPosts } from "./Action/action-posts";
import { categoriesReducer } from "./Reducer/reducer-categories";
import { postsReducer } from "./Reducer/reducer-posts";


export const store = configureStore({
    reducer : {
        allCategories : categoriesReducer,
        allPosts : postsReducer
    },
    devTools : process.env.NODE_ENV !== "production"
})

store.dispatch(getCategories())
store.dispatch(getPosts())
