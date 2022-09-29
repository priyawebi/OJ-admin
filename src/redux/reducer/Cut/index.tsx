import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cutTypeData: [],
};

const cutTypeSlice = createSlice({
  name: "cutType",
  initialState,
  reducers: {
    getcutTypeData(state, action) {
      state.cutTypeData = action.payload;
    },
  },
});
export const { getcutTypeData } = cutTypeSlice.actions;
export default cutTypeSlice.reducer;
