import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import modalReducer from "./slices/modalSlice/productModalSlice";
import filterReducer from "./slices/modalSlice/filterModalSlice";
import cartSliceReducer from "./slices/cartSlice/carSlice";
import mealQtyReducer from "./slices/mealSlice/mealSlice";
import authSliceReducer from "./slices/userSlice/authSlice";
import featureSliceReducer from "./slices/productSlice/productFeatureSlice";
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    cart: cartSliceReducer,
    feature: featureSliceReducer,
    modal: modalReducer,
    filterModal: filterReducer,
    mealQty: mealQtyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
