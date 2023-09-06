import { configureStore } from "@reduxjs/toolkit";
import userPricePreferencesReducer from "./userPricePreferences";

export const store = configureStore({
  reducer: {
    userPricePreferences: userPricePreferencesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
