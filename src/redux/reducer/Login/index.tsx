import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
const initialState: loginState = {
  loginData: [],
};



const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action) {
      state.loginData.push(action.payload as never);
    },
    resetLogin() {
      storage.removeItem('persist:root');
    },
  },
});
export const { login, resetLogin } = loginSlice.actions;
export default loginSlice.reducer;
