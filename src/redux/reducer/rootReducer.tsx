import { combineReducers } from '@reduxjs/toolkit';

import loginSlice from '../../../src/redux/reducer/Login/index'
import jwelleryTypeSlice from '../../../src/redux/reducer/JwelleryType/index'
import colorSlice from '../../../src/redux/reducer/Color/index'
import cutTypeSlice from '../../../src/redux/reducer/Cut/index'
import creatorSlice from '../../../src/redux/reducer/Creator/index'


export const rootReducer = combineReducers({
  login: loginSlice,
  jwelleryType :jwelleryTypeSlice,
  color:colorSlice,
  cut:cutTypeSlice,
  creator:creatorSlice
});
