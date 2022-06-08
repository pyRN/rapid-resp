import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  oPTA: {
    sNarrative: "Hello World",
    sPtaMeds: "",
    sPtHistory: "",
  },
};

export const logSlice = createSlice({
  name: "logSlice",
  initialState,
  reducers: {
    fnSetPtaLog: (state, action) => {
      state.oPTA.sNarrative = action.payload[0];
      state.oPTA.sPtaMeds = action.payload[1];
      state.oPTA.sPtHistory = action.payload[2];
      console.log(state);
    },
  },
});

export const { fnSetPtaLog } = logSlice.actions;

export default logSlice.reducer;
