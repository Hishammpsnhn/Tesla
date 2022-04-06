import {configureStore} from "@reduxjs/toolkit";
import carReducer from './feature/CarSlice';

export const store = configureStore({
    reducer: {
        car: carReducer
    },
})