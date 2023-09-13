import { configureStore } from "@reduxjs/toolkit"
import reviewSlice from '../redux/reducer'

const store = configureStore({
    reducer: {
        reviews: reviewSlice
    },
})

export default store;