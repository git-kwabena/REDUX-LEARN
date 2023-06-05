import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/users/usersApiSlice";
export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }

})