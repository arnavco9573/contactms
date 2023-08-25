import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./Slices/UserSlice";

// Load state from local storage
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

export const store = configureStore({
  reducer: {
    users: UserSlice.reducer,
  },
  preloadedState: persistedState, // Use persisted state as initial state
});

// Subscribe to store changes and save state to local storage
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
