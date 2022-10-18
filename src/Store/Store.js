import { configureStore } from "@reduxjs/toolkit";
import { getCategories } from "./Action/action-categories";
import { getPosts } from "./Action/action-posts";
import { categoriesReducer } from "./Reducer/reducer-categories";
import { loginReducer } from "./Reducer/reducer-login";
import { postsReducer } from "./Reducer/reducer-posts";
import { usersreducer } from "./Reducer/reducer-users";


export const store = configureStore({
    reducer : {
        allCategories : categoriesReducer,
        allPosts : postsReducer,
        auth : loginReducer,
        addUser : usersreducer
    },
    devTools : process.env.NODE_ENV !== "production"
})

store.dispatch(getCategories())
store.dispatch(getPosts())
