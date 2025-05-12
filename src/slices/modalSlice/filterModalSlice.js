import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openFilter: false,
};

const filterModalSlice = createSlice({
  name: "filterModal",
  initialState,
  reducers: {
    openFilterModal: (state) => {
      state.openFilter = true;
    },

    closeFilterModal: (state) => {
      state.openFilter = false;
    },
  },
});

export const { openFilterModal, closeFilterModal } = filterModalSlice.actions;
export default filterModalSlice.reducer;
