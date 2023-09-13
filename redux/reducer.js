import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    reviews: [],
}

export const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        add: (state, action) => {
            state.reviews = [...state.reviews, action.payload]
        },
        
    }
})



export const {add} = reviewSlice.actions
export default reviewSlice.reducer