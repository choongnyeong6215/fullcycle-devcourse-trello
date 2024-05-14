import { createSlice } from "@reduxjs/toolkit";
import { ILogItem } from "../../types";

interface ILogState {
  logArray: ILogItem[];
}

const initialState: ILogState = {
  logArray: [],
};

const loggerSlice = createSlice({
  name: "logger",
  initialState,
  reducers: {},
});

export const loggerReducer = loggerSlice.reducer;
