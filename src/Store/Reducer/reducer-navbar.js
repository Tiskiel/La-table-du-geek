import { createReducer } from "@reduxjs/toolkit"
import { getCategories } from "../Action/action-navbar"

const initialState = {
    allCategories : []
}

export const categoriesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getCategories.fulfilled, (state, action) => {
            
                console.log(state);
                return {

                    allCategories : action.payload

                }
        })
        .addCase(getCategories.rejected, (state, action) => {
            return{
                
                name : 'Error',
                

            }
        })
        .addCase(getCategories.pending, (state, action) => {
            return{
                
                name : 'Categories on road',
                

            }
        })
})