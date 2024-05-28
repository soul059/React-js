import { configureStore } from "@reduxjs/toolkit";
import todoReduser from "../features/Todo/todoSlice.js"

export const store = configureStore({
    reducer: todoReduser
})