import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === item._id ? { ...x, qty: x.qty + item.qty } : x,
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      state.itemsPrice = state.cartItems
        .reduce((acc, item) => acc + item.price * item.qty, 0)
        .toFixed(2);

      localStorage.setItem("cart", JSON.stringify(state));
    },
    decreaseQty: (state, action) => {
      const item = action.payload;

      state.cartItems = state.cartItems.map((x) =>
        x._id === item._id ? { ...x, qty: x.qty - 1 } : x,
      );
      if (item.qty === 1) {
        state.cartItems = state.cartItems.filter((x) => x._id !== item._id);
      }
      state.itemsPrice = state.cartItems
        .reduce((acc, item) => acc + item.price * item.qty, 0)
        .toFixed(2);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeItemFromCart: (state, action) => {
      const item = action.payload;
      state.cartItems = state.cartItems.filter((x) => x._id !== item._id);
      state.itemsPrice = state.cartItems
        .reduce((acc, item) => acc + item.price * item.qty, 0)
        .toFixed(2);
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, decreaseQty, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
