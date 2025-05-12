import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openProductId: null,
};

const productModalSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    openProductModal: (state, action) => {
      state.openProductId = action.payload; // set product ID
    },
    closeProductModal: (state) => {
      state.openProductId = null;
    },
  },
});
export const { openProductModal, closeProductModal } =
  productModalSlice.actions;

export default productModalSlice.reducer;
