import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  jwelleryTypeData: [],
};

const jwelleryTypeSlice = createSlice({
  name: "jwelleryType",
  initialState,
  reducers: {
    getJwelleryTypeData(state, action) {
      state.jwelleryTypeData = action.payload;
    },
  },
});
export const { getJwelleryTypeData } = jwelleryTypeSlice.actions;
export default jwelleryTypeSlice.reducer;
