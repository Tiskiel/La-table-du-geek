import { createReducer } from "@reduxjs/toolkit"
import { getCategories } from "../Action/action-categories"

const initialState = {
    allCategories : []
}

export const categoriesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getCategories.fulfilled, (state, action) => {
            
            
                return {

                    allCategories : action.payload

                }
        })
        .addCase(getCategories.rejected, (state, action) => {
            return{
                
                
                allCategories : []

            }
        })
        .addCase(getCategories.pending, (state, action) => {
            return{
                
                allCategories : []
                

            }
        })
})