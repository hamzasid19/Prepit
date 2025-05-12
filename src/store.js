import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import modalReducer from "./slices/modalSlice/productModalSlice";
import filterReducer from "./slices/modalSlice/filterModalSlice";
import cartSliceReducer from "./slices/cartSlice/carSlice";
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    modal: modalReducer,
    filterModal: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
