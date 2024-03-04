import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/cartSlice";

export const store =configureStore({
    reducer:CartSlice.reducer
})