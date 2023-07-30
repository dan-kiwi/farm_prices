import { configureStore } from "@reduxjs/toolkit";
import itemLocationReducer from "./itemLocation";

export const store = configureStore({
  reducer: {
    itemLocation: itemLocationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
