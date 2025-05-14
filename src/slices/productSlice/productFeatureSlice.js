import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  setFeature: [],
};

const featureSlice = createSlice({
  name: "featureSlice",
  initialState,
  reducers: {
    productFeature: (state, action) => {
      const existFeature = state.setFeature.find((x) => x === action.payload);

      if (existFeature) {
        state.setFeature = state.setFeature.filter((x) => x !== existFeature);
      } else {
        state.setFeature = [...state.setFeature, action.payload];
      }
    },

    clearFeature: (state) => {
      state.setFeature = [];
    },
  },
});

export const { productFeature, clearFeature } = featureSlice.actions;
export default featureSlice.reducer;
