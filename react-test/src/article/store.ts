import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articleSlice"
import displayStatusReducer from "./statusSlice"

export const store = configureStore({
  reducer: {
    article: articleReducer,
    displayStatus: displayStatusReducer
  }
});

// TypeScript用の型エクスポート
export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;