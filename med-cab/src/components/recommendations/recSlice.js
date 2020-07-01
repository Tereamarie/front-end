import { createSlice } from "@reduxjs/toolkit";

// A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

const recomendationSlice = createSlice({
    name: "recommendations",
    initialState: [],
    reducers: {
        addRecommendation(state, action) {},
        removeRecommendation(state, action) {}
    }
});

export const {
    addRecommendation,
    removeRecommendation
} = recomendationSlice.actions;

export default recomendationSlice.reducer;