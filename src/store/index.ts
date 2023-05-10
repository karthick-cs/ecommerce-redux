import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./slices/root";

export const store = configureStore({
    reducer: {
        root: rootReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
