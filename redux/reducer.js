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
        del: (state, action) => {
            state.reviews = state.reviews.filter((data) => data.id !== action.payload)
        },
    }
})



export const {add, del} = reviewSlice.actions
export default reviewSlice.reducer