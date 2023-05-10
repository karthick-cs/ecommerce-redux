import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
};

export const rootSlice = createSlice({
    name: "root",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setCartItems: (state: any, action: any) => {
            state.cartItems = action.payload;
        }
    }
});

export const {setCartItems} = rootSlice.actions;

export default rootSlice.reducer;
