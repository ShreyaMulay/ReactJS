import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    increaseQuantity: (state, action) => {
      const product = action.payload;
      if (!state[product.id]) {
        state[product.id] = { ...product, quantity: 1 };
      } else {
        state[product.id].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload.id;
      if (state[productId]) {
        if (state[productId].quantity > 1) {
          state[productId].quantity -= 1;
        } else {
          delete state[productId];
        }
      }
    },
  },
});

export const { increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
