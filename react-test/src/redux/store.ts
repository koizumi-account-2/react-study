import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  }
});

// TypeScript用の型エクスポート
export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;