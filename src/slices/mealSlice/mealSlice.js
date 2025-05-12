import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  setMealQty: 4,
};

const mealSlice = createSlice({
  name: "mealSlice",
  initialState,
  reducers: {
    changeMealQty: (state, action) => {
      state.setMealQty = action.payload;
    },
  },
});

export const { changeMealQty } = mealSlice.actions;
export default mealSlice.reducer;
