import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  creatorTypeData: [],
};

const creatorSlice = createSlice({
  name: "creatorType",
  initialState,
  reducers: {
    getCreatorTypeData(state, action) {
      state.creatorTypeData = action.payload;
    },
  },
});
export const { getCreatorTypeData } = creatorSlice.actions;
export default creatorSlice.reducer;
