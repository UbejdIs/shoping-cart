import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    cart(state, action) {
        const findedItem = state.items.find(item => item.id===action.payload.id)
        if(findedItem){
            
        }
      state.items = [...state.items, action.payload];
    },
    
  },
});
export default cartSlice.reducer;

export const { cart, findCart } = cartSlice.actions;