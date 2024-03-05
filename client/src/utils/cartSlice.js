import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartOpen: false,
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartOpen = true;
      state.cart.push(action.payload);
    },
    updateCartQuantity: (state, action) => {
      const index = state.cart.findIndex(item => item._id === action.payload._id);
      if (index !== -1) {
        state.cart[index].purchaseQuantity = action.payload.purchaseQuantity;
      }
      state.cartOpen = true;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item._id !== action.payload);
      state.cartOpen = state.cart.length > 0;
    },
    clearCart: (state) => {
      state.cart = [];
      state.cartOpen = false;
    },
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },
  },
});

export const { addToCart, updateCartQuantity, removeFromCart, clearCart, toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
