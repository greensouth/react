import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalCount: 0,
    productsLists: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers:{
        addProductToCart: (state, action) => {
            state.productsLists = [...state.productsLists, action.payload];
            state.totalCount += 1;
        }

    }

})

export const { addProductToCart, unsetUser } = cartSlice.actions;
export default cartSlice.reducer;