import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
  import { createWrapper } from 'next-redux-wrapper';
  import {rootReducer} from '../redux/reducer/rootReducer'
  import { configureStore, Reducer } from '@reduxjs/toolkit';
  
  const persistConfig = {
    key: 'root',
    storage: storage,
  };
  const persistedReducer = persistReducer(
    persistConfig,
    rootReducer as unknown as Reducer
  );
  
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    devTools: true,
  });
  
  export default store;
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  const makeStore = () => store;
  export const persistor = persistStore(store);
  export const wrapper = createWrapper(makeStore);
  

