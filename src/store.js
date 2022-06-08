import { configureStore } from "@reduxjs/toolkit";
import ptaReducer from "./features/CodeBlueSlices/ptaSlice";

export const store = configureStore({
  reducer: {
    ptaReducer: ptaReducer,
  },
});
