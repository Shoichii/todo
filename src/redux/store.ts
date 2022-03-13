import { configureStore } from '@reduxjs/toolkit'
import { newTaskSlice } from './newTaskSlice';
import { appSlice } from './appSlice';
// ...
export const store = configureStore({
  reducer: {
    newTaskSlice: newTaskSlice.reducer,
    appSlice: appSlice.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;