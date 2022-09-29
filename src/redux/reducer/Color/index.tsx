import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  colorTypeData: [],
};

const colorSlice = createSlice({
  name: "colorType",
  initialState,
  reducers: {
    getColorTypeData(state, action) {
      state.colorTypeData = action.payload;
    },
  },
});
export const { getColorTypeData } = colorSlice.actions;
export default colorSlice.reducer;
