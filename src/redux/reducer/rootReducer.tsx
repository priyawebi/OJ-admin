import { combineReducers } from '@reduxjs/toolkit';

import loginSlice from '../../../src/redux/reducer/Login/index'
import  jwelleryTypeSlice from '../../../src/redux/reducer/JwelleryType/index'
// import loaderSlice from '../reducer/Loader/index';
// import sideBarSlice from '../reducer/Sidebar/index';
// import packageSlice from '../reducer/Package/index';
// import sectionSlice from '../reducer/Section/index';
// import userLevelSlice from '../reducer/UserLevel/index';
// import userSlice from '../reducer/User/index';
// import questionSlice from '../reducer/Question/index';
// import numberTestSlice from '../reducer/Test/Number/index';
// import examSlice from '../reducer/Exam/index';
// import wordTestSlice from '../reducer/Test/Word/index';
// import imageTestSlice from '../reducer/Test/Image/index';
// import passageSlice from '../reducer/Test/Passage/index';
// import signTestSlice from '../reducer/Test/Sign/index';
// import calculationTestSlice from '../reducer/Test/Calculation/index';
// import audioVideoSlice from '../reducer/Test/AudioVideo/index';
// import writingTestSlice from '../reducer/Test/Writing/index';

export const rootReducer = combineReducers({
  login: loginSlice,
  jwelleryType:jwelleryTypeSlice
//   loader: loaderSlice,
//   section: sectionSlice,
//   word: wordTestSlice,
//   image: imageTestSlice,
//   sign: signTestSlice,
//   userLevel: userLevelSlice,
//   user: userSlice,
//   sideBar: sideBarSlice,
//   package: packageSlice,
//   passage: passageSlice,
//   question: questionSlice,
//   number: numberTestSlice,
//   exam: examSlice,
//   calculation: calculationTestSlice,
//   writing: writingTestSlice,
//   audioVideo : audioVideoSlice
});
