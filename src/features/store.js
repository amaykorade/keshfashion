
import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from './movies/movieSlice'

export const store = configureStore({
    reducer: {
        cards: cardsReducer,
    }
});