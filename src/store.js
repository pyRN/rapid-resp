import { configureStore } from "@reduxjs/toolkit";
import logReducer from "./features/LogSlices/logSlice";

export const store = configureStore({
  reducer: {
    ptaReducer: logReducer,
  },
});
